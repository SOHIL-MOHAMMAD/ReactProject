import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  // LOGIC: Agar user null hai (Logged out), toh Login page par bhejo
  if (!user) {
    // 'replace' ka matlab: Browser history mein pichla page save mat karna
    // (Taaki Back button dabane par wapas restricted page par na aa jaye)
    return <Navigate to="/login" replace />;
  }

  // Agar user hai, toh jo content manga tha wo dikhao
  return <>{children}</>;
};