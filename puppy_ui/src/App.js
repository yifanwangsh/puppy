import React from 'react';
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { LoginPage } from "./auth";
import { HomePage } from "./home";

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route exact path="/" component={LoginPage} props={browserHistory}/>
      <Route exact path="/home" component={HomePage} />
    </Router>
  )
}

export default App;
