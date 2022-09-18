import { ThemeContext } from "@emotion/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { setLoggedIn } = useContext(LoggedInContext);

  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.background.default }}>
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ padding: 1, maxWidth: "1000px" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
