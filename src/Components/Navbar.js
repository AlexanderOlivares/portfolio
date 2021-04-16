import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Alex Olivares
            <br />
            <Typography variant="h6">web devloper</Typography>
          </Typography>
          <Button color="inherit" href="/">
            Projects
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
