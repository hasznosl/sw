import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedInContext";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  const { handleSubmit, getValues, register } = useForm<LoginForm>();

  const [loginError, setLoginError] = useState<boolean>(false);

  const onSubmit = () => {
    if (getValues().password !== "starwars") {
      setLoginError(true);
    } else {
      setLoginError(false);
      setLoggedIn(true);
    }
  };

  return loggedIn ? (
    <Navigate to="/" />
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          gap="20px"
        >
          <TextField
            type="email"
            label="email"
            {...register("email", { required: true })}
          />
          <TextField
            label="password"
            type="password"
            {...register("password", { required: true })}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          {loginError && (
            <Typography color="error">
              Authentication error, please try again.
            </Typography>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default Login;
