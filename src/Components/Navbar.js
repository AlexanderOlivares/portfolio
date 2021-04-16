import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    flexGrow: 1,
  },
  icons: {
    justifyContent: "flex-end",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme(e) {
    e.preventDefault();
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Button color="inherit" href="/">
            Projects
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
          <Button color="inherit" href="/contact"></Button>
          <Button color="inherit" href="/" onClick={toggleTheme}>
            {isDarkTheme ? <ToggleOnIcon /> : <ToggleOffOutlinedIcon />}
          </Button>
          {isDarkTheme ? <Brightness2Icon /> : <Brightness7Icon />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
