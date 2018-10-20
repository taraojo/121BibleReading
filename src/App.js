import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Choices from "./Choices";
import Results from "./Results";
import Plan from "./Plan";
import Study from "./Study";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/choices" component={Choices} />
      <Route path="/results" component={Results} />
      <Route path="/plan/:id" component={Plan} />
      <Route path="/study/:id" component={Study} />
    </Switch>
  </Router>
);

export default App;
