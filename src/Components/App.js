import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}
