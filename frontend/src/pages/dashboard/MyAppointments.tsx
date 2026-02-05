import {useEffect, useState} from "react";
import {bookingsApi} from "@/api";
import type {Booking} from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {Loader2} from "lucide-react";

export default function MyAppointments() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const response = await bookingsApi.getMyBookings();
      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (id: string) => {
    if (!confirm("Are you sure you want to cancel this appointment?")) return;
    try {
      await bookingsApi.cancel(id, "User requested cancellation");
      toast.success("Booking cancelled successfully.");
      fetchBookings();
    } catch (error) {
      toast.error("Failed to cancel booking.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Appointments</h1>
      {bookings.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-muted-foreground">
            You have no upcoming appointments.
            <div className="mt-4">
              <Link
                to="/dashboard/book"
                className="text-primary hover:underline"
              >
                Book an appointment
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card
              key={booking.id}
              className={booking.status === "CANCELLED" ? "opacity-75" : ""}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>
                      {booking.appointmentType?.typeName || "Appointment"}
                    </CardTitle>
                    <CardDescription>
                      Ref: {booking.bookingReference}
                    </CardDescription>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                    ${
                      booking.status === "CONFIRMED"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "CANCELLED"
                          ? "bg-red-100 text-red-800"
                          : booking.status === "COMPLETED"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Date & Time</div>
                    <div>
                      {format(new Date(booking.appointmentDate), "PPPP")} at{" "}
                      {booking.appointmentTime.substring(0, 5)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div>{booking.location?.locationName}</div>
                    <div className="text-muted-foreground">
                      {booking.location?.addressLine1}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  {booking.status === "CONFIRMED" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancel(booking.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Cancel
                    </Button>
                  )}
                  {/* <Button size="sm">Download Confirmation</Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
