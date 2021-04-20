import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Box from "@material-ui/core/Box";
import projectData from "./ProjectData";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projectInfo, setProjectInfo] = useState(projectData);

  console.log(projectInfo);
  return (
    <>
      <Box m={3}>
        <Typography variant="h2" sm={"h6"} align="center" margin="10">
          Alex Olivares
        </Typography>
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
            {/* <Button color="inherit" href="/contact">
              {<MailOutlineIcon />}
            </Button> */}
          </Box>
        </Typography>
      </Box>
      <Box p={3}>
        <Container align="center">
          <Grid
            container
            spacing={10}
            alignItems="center"
            justify="center"
            direction="row"
          >
            {projectInfo.map(currentProject => {
              return (
                <Grid key={currentProject.name} item xs={12} sm={12} md={6}>
                  <Card projectInfo={currentProject} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
