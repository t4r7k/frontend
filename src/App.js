import React from 'react';
import {Grid, Container, Box} from '@mui/material';
import GameHistoryComponent from "./Components/GameHistoryComponent";
import DojoBoyComponent from "./Components/DojoBoyComponent";
import StakedComponent from "./Components/StakedComponent";

function App() {
  return (
    <div style={{backgroundColor:'#E1E1E1'}} className="w-full h-full">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <DojoBoyComponent isDisabled={false} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box mb={4}>
              <StakedComponent leftName="NFT #001" rightName="NFT #002" leftUrl="https://i.imgur.com/1Yz6JX1.png" rightUrl="https://i.imgur.com/1Yz6JX1.png" />
            </Box>
            <GameHistoryComponent />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DojoBoyComponent isDisabled={true} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
