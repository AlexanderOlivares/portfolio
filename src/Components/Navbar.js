import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
}));

export default function Navbar({ darkMode, setDarkMode }) {
  const classes = useStyles();

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <AppBar position="sticky">
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
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <ToggleOnIcon /> : <ToggleOffOutlinedIcon />}
        </IconButton>
        {darkMode ? <Brightness2Icon /> : <Brightness7Icon />}
      </Toolbar>
    </AppBar>
  );
}
