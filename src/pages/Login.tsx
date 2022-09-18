import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Login = () => {
  const { loggedIn } = useContext(LoggedInContext);

  return loggedIn ? <Navigate to="/"></Navigate> : <>Login</>;
};

export default Login;
