import React from "react";
import { Router } from "@reach/router";
import CoinsList from "./views/CoinsList";

const Routing = () => (
  <Router>
    <CoinsList path="/" />
  </Router>
);

export default Routing;
