export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 border rounded-lg shadow-sm bg-card">
          <div className="text-sm font-medium text-muted-foreground">
            Upcoming Appointments
          </div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="p-6 border rounded-lg shadow-sm bg-card">
          <div className="text-sm font-medium text-muted-foreground">
            Waitlist Status
          </div>
          <div className="text-2xl font-bold">0 Active</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow-sm bg-card">
          <h3 className="font-semibold text-lg mb-4">Current Booking</h3>
          <p className="text-muted-foreground">No active bookings found.</p>
          <a
            href="/dashboard/book"
            className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
          >
            Book New Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
