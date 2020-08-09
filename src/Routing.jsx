import React from "react";
import { Router } from "@reach/router";
import SignUpDomain from "./domains/SignUp";
import LoginDomain from "./domains/Login";

const Routing = () => (
  <Router>
    <LoginDomain path="/"></LoginDomain>
    <SignUpDomain path="/signup"> </SignUpDomain>
  </Router>
);

export default Routing;
