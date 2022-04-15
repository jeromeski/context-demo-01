import localforage from "localforage";
import React from "react";
import reducer, { initialState } from "./auth.reducer";

const globalContext = React.createContext();

const getLocalStorageItem = async () => {
  let data = await localforage.getItem("auth");
  data = JSON.parse(data);
  console.log("getLS", data);
  if (!data) {
    return initialState;
  }
  return data;
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = React.useReducer(reducer, getLocalStorageItem());
  console.log("store", store);
  //memoizes the contextValue so only rerenders if store or dispatch change
  const contextValue = React.useMemo(() => [store, dispatch], [
    store,
    dispatch
  ]);

  return (
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
};

export function useStore() {
  return React.useContext(globalContext);
}
