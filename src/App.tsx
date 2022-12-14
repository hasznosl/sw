import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import PlanetDetails from "./pages/PlanetDetails";
import RequireAuth from "./fakeAuth/RequireAuth";
import LoggedInProvider from "./contexts/LoggedInContext";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import LoggedInLayout from "./layouts/Layout";
import { SWRConfig } from "swr";

const theme = createTheme({
  palette: { background: { default: "#BFD3C6" } },
});

const App = () => (
  <LoggedInProvider>
    <CssBaseline />
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <LoggedInLayout>
                    <Overview />
                  </LoggedInLayout>
                </RequireAuth>
              }
            />
            <Route
              path="/planets/{:id}"
              element={
                <RequireAuth>
                  <LoggedInLayout>
                    <PlanetDetails />
                  </LoggedInLayout>
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  </LoggedInProvider>
);

export default App;
