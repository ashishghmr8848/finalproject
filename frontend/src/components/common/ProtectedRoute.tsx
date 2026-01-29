import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuthStore} from "@/store/authStore";
import {LoadingSpinner} from "./LoadingSpinner";

interface ProtectedRouteProps {
  allowedRoles?: string[];
  children?: React.ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const {token, user, loading} = useAuthStore();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/auth/login" state={{from: location}} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
