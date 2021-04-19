import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  JavaScript: {
    backgroundColor: "#f7df1e",
  },
  React: {
    backgroundColor: "#61DBFB",
  },
}));

export default function ProjectInfoCard({ projectInfo }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [info, setInfo] = useState(projectInfo);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(info.img);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          info.language === "JavaScript" ? (
            <Avatar aria-label="recipe" className={classes.JavaScript}>
              {info.icon}
            </Avatar>
          ) : (
            <Avatar aria-label="recipe" className={classes.React}>
              {info.icon}
            </Avatar>
          )
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={info.name}
        subheader={info.subHeader}
      />
      <CardMedia className={classes.media} image={info.img} alt="info.name" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {info.shortDescrip}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="large" href={info.demo} target="_blank">
          DEMO
        </Button>
        <Button size="large" href={info.repoUrl} target="_blank">
          CODE
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="secondary"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{info.longDescrip}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
