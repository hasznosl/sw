import { createContext, useState } from "react";

export const LoggedInContext = createContext({
  loggedIn: false,
  setLoggedIn: (newLoggedInState: boolean) => {},
});

interface Props {
  children: React.ReactNode;
}

const LOGGED_IN_STATE_LS_KEY = "LOGGED_IN_STATE_LS_KEY";
const LOGGED_IN = "LOGGED_IN";

const LoggedInProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem(LOGGED_IN_STATE_LS_KEY) === LOGGED_IN
  );

  return (
    <LoggedInContext.Provider
      value={{
        loggedIn,
        setLoggedIn: (newLoggedInState: boolean) => {
          localStorage.setItem(
            LOGGED_IN_STATE_LS_KEY,
            newLoggedInState ? LOGGED_IN : "logged-out"
          );
          setLoggedIn(newLoggedInState);
        },
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
