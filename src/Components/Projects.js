import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

export default function Projects() {
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}
