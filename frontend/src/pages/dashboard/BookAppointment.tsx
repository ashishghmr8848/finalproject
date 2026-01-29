import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {appointmentsApi, locationsApi, bookingsApi, slotsApi} from "@/api";
import {useAuthStore} from "@/store/authStore";
import type {AppointmentType, Location, AvailableSlot} from "@/types";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";
import {toast} from "react-toastify";
import {Loader2} from "lucide-react";

export default function BookAppointment() {
  const navigate = useNavigate();
  const {user} = useAuthStore();
  const [step, setStep] = useState(1);
  const [appointmentTypes, setAppointmentTypes] = useState<AppointmentType[]>(
    [],
  );
  const [locations, setLocations] = useState<Location[]>([]);
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);

  // Selection State
  const [selectedType, setSelectedType] = useState<AppointmentType | null>(
    null,
  );
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await appointmentsApi.getAll();
        // Filter active types
        setAppointmentTypes(
          response.data.filter((t: AppointmentType) => t.isActive),
        );
      } catch (error) {
        console.error("Error fetching types:", error);
        toast.error("Failed to load service types.");
      }
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    if (selectedType) {
      const fetchLocations = async () => {
        try {
          // Ideally backend filters locations by type, but here we fetch all and assume availability or filter if data allows
          const response = await locationsApi.getAll();
          setLocations(response.data.filter((l: Location) => l.isActive));
        } catch (error) {
          console.error("Error fetching locations:", error);
          toast.error("Failed to load locations.");
        }
      };
      fetchLocations();
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedType && selectedLocation && date) {
      const fetchSlots = async () => {
        setSlotsLoading(true);
        setSelectedTime(null);
        try {
          const formattedDate = format(date, "yyyy-MM-dd");
          const response = await slotsApi.getAvailable({
            locationId: selectedLocation.id,
            appointmentTypeId: selectedType.id,
            startDate: formattedDate,
            endDate: formattedDate,
          });
          setAvailableSlots(response.data);
        } catch (error) {
          console.error("Error fetching slots:", error);
          // Fallback or dry run if backend not ready
          setAvailableSlots([]);
        } finally {
          setSlotsLoading(false);
        }
      };
      fetchSlots();
    }
  }, [selectedType, selectedLocation, date]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleBook = async () => {
    if (!selectedType || !selectedLocation || !date || !selectedTime || !user)
      return;
    setLoading(true);
    try {
      const formattedDate = format(date, "yyyy-MM-dd");

      await bookingsApi.create({
        appointmentTypeId: selectedType.id,
        locationId: selectedLocation.id,
        appointmentDate: formattedDate,
        appointmentTime: selectedTime,
        notes: "Booked via website",
      });

      toast.success("Appointment booked successfully!");
      navigate("/dashboard/my-bookings");
    } catch (error: any) {
      console.error("Booking failed:", error);
      toast.error(
        error.response?.data?.message || "Booking failed. Slot might be taken.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Book New Appointment
      </h1>

      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2">
          {/* Steps Indicator */}
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {s}
              </div>
              {s < 4 && (
                <div className="w-12 h-1 mx-2 bg-muted overflow-hidden rounded-full">
                  <div
                    className={`h-full bg-primary transition-all duration-300 ${step > s ? "w-full" : "w-0"}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Service</CardTitle>
            <CardDescription>
              Choose the type of appointment you need.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {appointmentTypes.length === 0 ? (
              <div className="col-span-2 text-center text-muted-foreground p-8">
                No active appointment types available.
              </div>
            ) : null}
            {appointmentTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${selectedType?.id === type.id ? "border-primary bg-primary/5 ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedType(type)}
              >
                <h3 className="font-semibold">{type.typeName}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.durationMinutes} mins
                </p>
                {type.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button disabled={!selectedType} onClick={handleNext}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Location</CardTitle>
            <CardDescription>Choose a convenient location.</CardDescription>
          </CardHeader>
          <CardContent>
            {locations.length === 0 ? (
              <p className="text-center text-muted-foreground p-8">
                No locations available for this service.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${selectedLocation?.id === loc.id ? "border-primary bg-primary/5 ring-2 ring-primary" : ""}`}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    <h3 className="font-semibold">{loc.locationName}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      <p>{loc.addressLine1}</p>
                      <p>
                        {loc.city}, {loc.state} {loc.zipCode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button disabled={!selectedLocation} onClick={handleNext}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
            <CardDescription>Pick an available slot.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-8">
            <div className="flex-none">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium mb-3">Available Times</h4>
              {slotsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin h-6 w-6 text-primary" />
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No slots available for this date.</p>
                  {date && (
                    <Button
                      variant="link"
                      className="mt-2"
                      onClick={() => navigate("/dashboard/my-waitlist")}
                    >
                      Join Waitlist
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {availableSlots.map((slot) => (
                    <Button
                      key={`${slot.date}-${slot.time}`} // Use composite key
                      variant={
                        selectedTime === slot.time ? "default" : "outline"
                      }
                      onClick={() => setSelectedTime(slot.time)}
                      className="w-full"
                      disabled={slot.availableCapacity <= 0}
                    >
                      {slot.time.substring(0, 5)} {/* Display HH:MM */}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button disabled={!date || !selectedTime} onClick={handleNext}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Confirm Booking</CardTitle>
            <CardDescription>
              Review your details before booking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-muted-foreground">Service</div>
              <div className="font-medium text-right">
                {selectedType?.typeName}
              </div>

              <div className="text-muted-foreground">Location</div>
              <div className="font-medium text-right">
                {selectedLocation?.locationName}
                <br />
                <span className="text-xs text-muted-foreground">
                  {selectedLocation?.addressLine1}, {selectedLocation?.city}
                </span>
              </div>

              <div className="text-muted-foreground">Date</div>
              <div className="font-medium text-right">
                {date && format(date, "PPPP")}
              </div>

              <div className="text-muted-foreground">Time</div>
              <div className="font-medium text-right">
                {selectedTime?.substring(0, 5)}
              </div>

              <div className="text-muted-foreground">Duration</div>
              <div className="font-medium text-right">
                {selectedType?.durationMinutes} minutes
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleBook} disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
