import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Chocolate from "./Chocolate";

function VendingMachine() {
  return (
    <div className="VendingMachine">
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/chips">
            <Chips />
        </Route>
        <Route exact path="/chocolate" component={Chocolate} />
    </div>
  );
}

export default VendingMachine;