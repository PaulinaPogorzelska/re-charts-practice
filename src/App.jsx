import React from "react";
import Routing from "./Routing";
import { StoreProvider } from "./store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Routing />
      </StoreProvider>
    </div>
  );
}

export default App;
