import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Box from "@material-ui/core/Box";
import emailjs from "emailjs-com";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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

export default function Contact() {
  const SID = process.env.REACT_APP_SERVICEID;
  const TID = process.env.REACT_APP_TEMPLATEID;
  const UID = process.env.REACT_APP_USERID;

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

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SID, TID, e.target, UID).then(
      result => {
        alert("Thanks for reaching out -Alex");
        console.log(result.text);
      },
      error => {
        alert(
          "Opps something went wrong with my email relay. Please contact at the email address listed in my resume."
        );
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <>
      <Box mt={2}>
        <Typography variant="h2" sm={"h6"} align="center" margin="10">
          Contact Me
        </Typography>
      </Box>
      <Box m={2} className={classes.root}>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/alex-olivares/"
        >
          {<LinkedInIcon />}
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://github.com/AlexanderOlivares"
        >
          {<GitHubIcon />}
        </Button>
      </Box>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
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
            label="message"
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
            type="submit"
            value="Send"
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
