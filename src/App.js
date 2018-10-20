import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Choices from "./Choices";
import Results from "./Results";
import Plan from "./Plan";
import Study from "./Study";
import Sharing from "./Sharing";
import Bible from "./Bible";
import Complete from "./Complete";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/choices" component={Choices} />
      <Route path="/results" component={Results} />
      <Route path="/plan/:id" component={Plan} />
      <Route path="/sharing/:id" component={Sharing} />
      <Route path="/bible" component={Bible} />
      <Route path="/study/:planId/:id" component={Study} />
      <Route path="/complete" component={Complete} />
    </Switch>
  </Router>
);

export default App;
