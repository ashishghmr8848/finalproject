import {Outlet, Link, useNavigate} from "react-router-dom";
import {User, LogOut, Calendar, Home, List} from "lucide-react";
import {useAuthStore} from "@/store/authStore";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const {logout} = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-muted/40">
      <aside className="w-64 bg-background border-r hidden md:block">
        <div className="p-6">
          <Link to="/dashboard" className="text-lg font-bold">
            My Portal
          </Link>
        </div>
        <nav className="space-y-1 px-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <Home className="h-4 w-4" /> Dashboard
          </Link>
          <Link
            to="/dashboard/book"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
          <Link
            to="/dashboard/my-bookings"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <Calendar className="h-4 w-4" /> My Bookings
          </Link>
          <Link
            to="/dashboard/my-waitlist"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <List className="h-4 w-4" /> My Waitlist
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <User className="h-4 w-4" /> Profile
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b bg-background flex items-center justify-between px-6 md:justify-end">
          <div className="md:hidden font-bold">My Portal</div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-destructive hover:underline"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
