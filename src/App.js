import React from 'react';
import { Grid, Container } from '@mui/material';
import GameHistoryComponent from "./Components/GameHistoryComponent";
import DojoBoyComponent from "./Components/DojoBoyComponent";

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <DojoBoyComponent isDisabled={false} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <GameHistoryComponent />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DojoBoyComponent isDisabled={true} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
