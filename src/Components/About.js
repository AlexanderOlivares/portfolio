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
import SocialLinks from "./SocialLinks";

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
  link: {
    textDecoration: "none",
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
      <SocialLinks />
      <Box m={5} align="center">
        <Container align="center">
          <Grid
            container
            spacing={10}
            alignItems="center"
            justify="center"
            direction="row"
          >
            {aboutInfo.map((currentInfo, currentIndex) => {
              return (
                <Grid
                  data-aos={currentIndex % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="700"
                  key={currentInfo.title}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                >
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
                        {currentInfo.bonus && (
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
                      {currentInfo.link1 && (
                        <Button
                          size="large"
                          href={currentInfo.link1}
                          target="_blank"
                        >
                          {currentInfo.link1Descrip}
                        </Button>
                      )}
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
