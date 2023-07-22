import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';

const GameHistoryLine = ({createdAt, changeLeft, iconLeft, leftAddr, MoveIcon, iconRight, rightAddr, changeRight}) => {
  return (
    <ListItem>
      <ListItemText primary={createdAt} />
      <ListItemText primary={changeLeft} />
      <SvgIcon component={iconLeft} viewBox="0 0 24 24"/>
      <ListItemText primary={leftAddr} />
      <SvgIcon component={MoveIcon} viewBox="0 0 24 24"/>
      <SvgIcon component={iconRight} viewBox="0 0 24 24"/>
      <ListItemText primary={rightAddr} />
      <ListItemText primary={changeRight} />
    </ListItem>
  );
}

export default GameHistoryLine;
