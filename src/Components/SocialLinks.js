import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <>
      <Typography variant="h5" align="center">
        Web Developer
        <Box m={2}>
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
          <Link to="/contact">
            <Button style={{ textDecoration: "none" }}>
              {<MailOutlineIcon />}
            </Button>
          </Link>
        </Box>
      </Typography>
    </>
  );
}

export default SocialLinks;
