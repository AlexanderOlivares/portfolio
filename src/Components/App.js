import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
