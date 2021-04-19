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
import Link from "@material-ui/core/Link";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
          <Button color="inherit" href="/contact">
            {<MailOutlineIcon />}
          </Button>
        </Box>
      </Typography>
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
                        title={currentInfo.title}
                        alt={currentInfo.title}
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
                          {/* this is for they extra link to my edabit q's  */}
                          {/* {currentInfo.bonus && (
                            <Link
                              href="https://edabit.com/user/2Qk2mFu9HBFzrB24i"
                              target="_blank"
                            >
                              here.
                            </Link>
                          )} */}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="large"
                        href={currentInfo.link1}
                        target="_blank"
                      >
                        {currentInfo.link1Descrip}
                      </Button>
                      {currentInfo.link2 && (
                        <Button
                          size="large"
                          href={currentInfo.link2}
                          target="_blank"
                        >
                          {currentInfo.link2Descrip}
                        </Button>
                      )}
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
