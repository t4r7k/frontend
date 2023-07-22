import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

const GameHistoryLine = ({createdAt, changeLeft, iconLeft, leftAddr, MoveIcon, iconRight, rightAddr, changeRight, isGray}) => {
  return (
    <ListItem>
      <Box mr={0.8} ml={-1.4}><ListItemText primary={createdAt} /></Box>
      <Box mr={0.8}><ListItemText primary={changeLeft} /></Box>
      <Box mr={0.8}><SvgIcon component={iconLeft} viewBox="0 0 24 24"/></Box>
      <Box mr={0.8}><ListItemText primary={leftAddr} /></Box>
      <Box mr={0.8}><SvgIcon component={MoveIcon} viewBox="0 0 24 24" fill={isGray ? 'white' : 'black'}/></Box>
      <Box mr={0.8}><SvgIcon component={iconRight} viewBox="0 0 24 24"/></Box>
      <Box mr={0.8}><ListItemText primary={rightAddr} /></Box>
      <ListItemText primary={changeRight} />
    </ListItem>
  );
}

export default GameHistoryLine;
