import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GameHistoryLine from "./GameHistoryLines";
import { ReactComponent as PoliceIcon} from '../icons/police.svg';
import {ReactComponent as AttackWhite} from '../icons/attack_white.svg';

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
    <Paper sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="h6" component="div">
        Game History
      </Typography>
      <List>
        {history.map((line, index) =>
          <div style={{backgroundColor: index % 2 === 0 ? 'gray' : 'white'}}>
            <GameHistoryLine {...line} />
          </div>
        )}
      </List>
      <Button variant="contained" onClick={handleAdd}>
        Add Line
      </Button>
    </Paper>
  );
}

export default GameHistoryComponent;
