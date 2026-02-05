import {useEffect, useState} from "react";
import {waitlistApi} from "@/api";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {LoadingSpinner} from "@/components/common/LoadingSpinner";
import {toast} from "react-toastify";
import {format} from "date-fns";
import {Calendar, MapPin, Ticket} from "lucide-react";
import {Link} from "react-router-dom";

const MyWaitlist = () => {
  const [entries, setEntries] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWaitlist = async () => {
    try {
      const response = await waitlistApi.getMyWaitlist();
      setEntries(response.data || []);
    } catch (error) {
      console.error("Failed to fetch waitlist", error);
      toast.error("Failed to load waitlist entries.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const handleRemove = async (id: string) => {
    if (!confirm("Are you sure you want to leave this waitlist?")) return;

    try {
      await waitlistApi.removeEntry(id);
      toast.success("Removed from waitlist.");
      fetchWaitlist();
    } catch (error) {
      toast.error("Failed to remove from waitlist.");
    }
  };

  if (isLoading) {
    return <LoadingSpinner className="h-[50vh]" />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Waitlist</h1>
        <Button asChild>
          <Link to="/dashboard/book">Join New Waitlist</Link>
        </Button>
      </div>

      {entries.length === 0 ? (
        <Card className="text-center py-12">
          <CardHeader>
            <CardTitle>You are not on any waitlists</CardTitle>
            <CardDescription>
              If your desired appointment slot is unavailable, you can join the
              waitlist to be notified when it frees up.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link to="/dashboard/book">Book Appointment</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry: any) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {entry.appointmentType?.typeName}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {entry.location?.locationName}
                    </CardDescription>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      entry.status === "NOTIFIED"
                        ? "bg-green-100 text-green-800"
                        : entry.status === "WAITING"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {entry.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Ticket className="h-4 w-4 mr-2" />
                  Position:{" "}
                  <span className="font-semibold ml-1">
                    {entry.position || "-"}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined: {format(new Date(entry.joinedAt), "PP")}
                </div>
                {entry.preferredDateStart && (
                  <div className="text-sm text-gray-600 mt-2">
                    Preferred:{" "}
                    {format(new Date(entry.preferredDateStart), "PP")}
                    {entry.preferredDateEnd &&
                      ` - ${format(new Date(entry.preferredDateEnd), "PP")}`}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={() => handleRemove(entry.id)}
                >
                  Leave Waitlist
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWaitlist;
