import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import headshot from "../images/headshot.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AboutData from "./AboutData";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export default function About() {
  const classes = useStyles();
  const [aboutInfo, setAboutInfo] = useState(AboutData);

  return (
    <>
      <Box align="center" m={3}>
        <Typography variant="h3" sm={"h6"} margin="10">
          Alex Olivares
        </Typography>
        <Avatar
          alt="Alex Olivares Headshot"
          src={headshot}
          className={classes.large}
        />
      </Box>
      {/* <Box p={3}>
        <Container align="center">
          <Grid
            container
            spacing={10}
            alignItems="center"
            justify="center"
            direction="row"
          >
            {aboutInfo.map(currentInfo => {
              return (
                <Grid key={currentInfo.name} item xs={12} sm={12} md={6}>
                  <Card projectInfo={currentProject} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box> */}
      <Box m={5} align="center">
        <Container align="center">
          <Grid
            container
            spacing={10}
            alignItems="center"
            justify="center"
            direction="row"
          >
            {aboutInfo.map(currentInfo => {
              return (
                <Grid key={currentInfo.title} item xs={12} sm={12} md={6}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={currentInfo.img}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {currentInfo.title}
                        </Typography>
                        {currentInfo.hasOwnProperty("bonus") && (
                          <img src="https://www.codewars.com/users/AlexanderOlivares/badges/micro"></img>
                        )}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {currentInfo.descrip}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="large" color="secondary">
                        Share
                      </Button>
                      <Button size="large" color="secondary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      );
    </>
  );
}

// My curiosity for coding (which began in college) was spurred
// again in May 2020. Since then I have been coding nonstop
// spending my mornings learning JavaScript and React with no plans
// to slow down. I love doing challenges on Codewars and Edabit.
// Check out my profiles and solve the questions I posted on Edabit
// here.
// I love to play ping-pong. Pre-pandemic I was a part of Spin's
// weekly social league. I also enjoy slack-lining and spending
// time outside with my dog Jaxx.
