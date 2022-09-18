import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import PlanetDetails from "./pages/PlanetDetails";
import RequireAuth from "./fakeAuth/RequireAuth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Overview />
            </RequireAuth>
          }
        />
        <Route
          path="/planets/{:id}"
          element={
            <RequireAuth>
              <PlanetDetails />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
