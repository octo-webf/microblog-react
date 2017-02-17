import React from "react";
import ReactDOM from "react-dom";
import createHashHistory from "history/lib/createHashHistory";
import {Router, Route} from "react-router";
import App from "./App/App";
import About from "./About/About";

ReactDOM.render(
  <Router history={createHashHistory()}>
    <Route path="/" component={App}/>
    <Route path="about" component={About}/>
  </Router>,
  document.getElementById('root')
);
