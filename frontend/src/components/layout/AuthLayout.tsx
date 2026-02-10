import {Outlet} from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md space-y-8 bg-background p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Motor Vehicle Appointments
          </h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
