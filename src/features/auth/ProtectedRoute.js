import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (token === "admin@bukapedia.com") {
    return <Navigate to="/admin" />
  }

  return children;
}