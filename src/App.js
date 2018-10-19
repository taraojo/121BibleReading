import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Choices from "./Choices";
import Results from "./Results";
import Study from "./Study";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Choices} />
      <Route path="/results" component={Results} />
      <Route path="/study" component={Study} />
    </Switch>
  </Router>
);

export default App;
