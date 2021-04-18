import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "40ch",
    },
    textAlign: "center",
    margin: theme.spacing(2),
  },
}));

export default function StateTextFields() {
  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Box mt={2}>
        <Typography variant="h2" sm={"h6"} align="center" margin="10">
          Contact Me
        </Typography>
      </Box>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-name"
            label="name"
            name="name"
            value={input.name}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            type="email"
            label="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Message"
            name="message"
            multiline
            rows={3}
            rowsMax={20}
            value={input.message}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div mt={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </div>
      </form>
      <Box mt={10}>
        <Typography variant="h4" sm={"h6"} align="center">
          Download My Resume
        </Typography>
        <Box p={3} className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CloudDownloadIcon></CloudDownloadIcon>}
          >
            Download PDF
          </Button>
        </Box>
      </Box>
    </>
  );
}
