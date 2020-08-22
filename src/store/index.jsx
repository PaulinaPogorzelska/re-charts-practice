import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import CoinsStore from "./CoinsStore";

const StoreContext = createContext({
  CoinsStore: null,
});

export const StoreProvider = ({ children }) => {
  const coinsStore = useLocalStore(CoinsStore);

  return (
    <StoreContext.Provider
      value={{
        CoinsStore: coinsStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
export { useObserver } from "mobx-react-lite";

export default StoreProvider;
