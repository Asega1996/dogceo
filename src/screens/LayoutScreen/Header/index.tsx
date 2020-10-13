import React from "react";

import { MainMenu } from "@Components/Layout/Header";
import { Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CBox from "@Components/Custom/CBox";

const Header = () => {
  return (
    <Grid container item xs={12} spacing={0}>
      <AppBar position="fixed">
        <CBox backgroundcolor="white">
          <Container>
            <MainMenu />
          </Container>
        </CBox>
      </AppBar>
    </Grid>
  );
};

export default Header;
