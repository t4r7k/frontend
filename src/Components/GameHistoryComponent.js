import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GameHistoryLine from "./GameHistoryLines";
import { ReactComponent as PoliceIcon} from '../icons/police.svg';
import {ReactComponent as AttackWhite} from '../icons/attack_white.svg';
import {Box} from "@mui/material";

const GameHistoryComponent = () => {
  const [history, setHistory] = useState([{
    createdAt: '12:04',
    changeLeft: '+600',
    iconLeft: PoliceIcon,
    leftAddr: '0x12567',
    MoveIcon: AttackWhite,
    iconRight: PoliceIcon,
    rightAddr: '0x12567',
    changeRight: '-600',
  }]);

  const handleAdd = () => {
    setHistory([...history, {
      createdAt: '12:04',
      changeLeft: '+600',
      iconLeft: PoliceIcon,
      leftAddr: '0x12567',
      MoveIcon: AttackWhite,
      iconRight: PoliceIcon,
      rightAddr: '0x12567',
      changeRight: '-600',
    }]);
  };

  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', textAlign:'center' }}>
      <Typography variant="h6" component="div">
        Game History
      </Typography>
      <List sx={{paddingX:'5px'}}>
        {history.map((line, index) =>
          <Box style={{backgroundColor: index % 2 === 0 ? 'gray' : 'white', borderRadius:'5%'}}>
            <GameHistoryLine {...line} isGray={index % 2 === 0 ? 'gray' : 'white'} />
          </Box>
        )}
      </List>
      <Button variant="contained" onClick={handleAdd}>
        Add Line
      </Button>
    </Paper>
  );
}

export default GameHistoryComponent;
