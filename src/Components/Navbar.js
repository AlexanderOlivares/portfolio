import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  Button: {
    textDecoration: "none",
  },
  link: {
    color: "#fff",
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
        <Link className={classes.Button} to="/">
          <Button className={classes.link} size="medium" color="default">
            Projects
          </Button>
        </Link>
        <Link className={classes.Button} to="/about">
          <Button className={classes.link} size="medium">
            About
          </Button>
        </Link>
        <Link className={classes.Button} to="contact">
          <Button className={classes.link} size="medium" color="default">
            Contact
          </Button>
        </Link>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <ToggleOnIcon /> : <ToggleOffOutlinedIcon />}
        </IconButton>
        {darkMode ? <Brightness2Icon /> : <Brightness7Icon />}
      </Toolbar>
    </AppBar>
  );
}
