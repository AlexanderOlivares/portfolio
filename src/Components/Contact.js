import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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
        alert("Message received. Thanks for reaching out -Alex");
        console.log(result.text);
      },
      error => {
        alert(
          "Oops something went wrong with my email relay. Please contact at the email address listed in my resume."
        );
        console.log(error.text);
      }
    );

    setInput({
      name: "",
      email: "",
      message: "",
    });
  }

  function downloadPDF() {
    const pdfUrl =
      "https://docs.google.com/document/d/1hNti5aMvcixPM-l3yZ3uQLUAIjcbbbINlF6GLMFHJF4/export?format=pdf";
    window.open(pdfUrl, "_blank");
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
          data-aos="fade-right"
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/alex-olivares/"
        >
          {<LinkedInIcon />}
        </Button>
        <Button
          data-aos="fade-right"
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
        <div data-aos="fade-right" data-aos-duration="400">
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
        <div data-aos="fade-right" data-aos-duration="600">
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
        <div data-aos="fade-right" data-aos-duration="800">
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
        <div data-aos="fade-right" data-aos-duration="1000" mt={2}>
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
      <div mt={5} data-aos="fade-right" data-aos-duration="1000">
        <Typography variant="h4" sm={"h6"} align="center">
          Download My Resume
        </Typography>
        <Box p={2} className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CloudDownloadIcon></CloudDownloadIcon>}
            onClick={downloadPDF}
          >
            Download PDF
          </Button>
        </Box>
      </div>
    </>
  );
}
