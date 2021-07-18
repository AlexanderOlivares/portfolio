import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import Box from "@material-ui/core/Box";
import projectData from "./ProjectData";
import SocialLinks from "./SocialLinks";

export default function Projects() {
  const [projectInfo, setProjectInfo] = useState(projectData);

  return (
    <>
      <Box m={3}>
        <Typography variant="h2" sm={"h6"} align="center" margin="10">
          Alex Olivares
        </Typography>
        <SocialLinks />
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
            {projectInfo.map((currentProject, projectIndex) => {
              return (
                <Grid
                  data-aos={projectIndex % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="700"
                  key={currentProject.name}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                >
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
