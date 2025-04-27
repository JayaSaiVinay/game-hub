import React from "react";
import { Button } from "@chakra-ui/button";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          NavBar
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        NavBar
      </GridItem>
    </Grid>
  );
};

export default App;
