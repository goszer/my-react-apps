import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserStore = React.createContext();
UserStore.displayName = "User Store";

export const useUserStore = () => useContext(UserStore);

export const UserStoreProvider = ({ children, reducer }) => {
  const [userContext, dispatcher] = useLocalStorage("loggedInUser", '');
  return (
    <UserStore.Provider value={[userContext, dispatcher]}>
      {children}
    </UserStore.Provider>
  );
};
