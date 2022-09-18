import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedInContext";

interface Props {
  children: JSX.Element;
}

const RequireAuth = ({ children }: Props) => {
  const { loggedIn } = useContext(LoggedInContext);

  const location = useLocation();

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
