import { useState } from "react";
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
  Node: {
    backgroundColor: "#68A063",
  },
  TypeScript: {
    backgroundColor: "#007acc",
  },
  Python: {
    backgroundColor: "#306998",
  },
}));

export default function ProjectInfoCard({ projectInfo }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="JavaScript Logo"
            className={classes[projectInfo.language]}
          >
            {projectInfo.icon}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={projectInfo.name}
        subheader={projectInfo.subHeader}
      />
      <CardMedia
        className={classes.media}
        image={projectInfo.img}
        alt="projectInfo.name"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {projectInfo.shortDescrip}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="large" href={projectInfo.demo} target="_blank">
          LIVE SITE
        </Button>
        <Button size="large" href={projectInfo.repoUrl} target="_blank">
          VIEW CODE
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
          <Typography paragraph>{projectInfo.longDescrip}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
