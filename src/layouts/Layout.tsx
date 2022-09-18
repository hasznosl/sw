import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { setLoggedIn } = useContext(LoggedInContext);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 1 }}>{children}</Box>
    </>
  );
};

export default Layout;
