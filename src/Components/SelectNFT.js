import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, List, Box, ListItemButton, ListItemText, ListItem } from "@mui/material";

const useStyles = makeStyles({
  screen: {
    height: '250px',
    width: '252px',
    border: '2px solid #45444a',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    background:'#ffffff',
    padding: '5px 7px 0px 7px',
    flexDirection: 'column',
  },
  screenBackground: {
    width: '282px',
    height: '266px',
    background:'#5F5F5F',
    borderRadius: '10px',
    alignItems: 'center',
    padding: '8px 15px 8px 15px',
    alignSelf: 'center',
  },
  font: {
    fontSize: '12px',
    fontWeight: 'lighter',
    color: '#000000',
  },
  list: {
    alignSelf: 'center',
    alignItems: 'center',
    overflow: 'auto',
    maxHeight: '120px',
    margin: '10px 0',
  },
});

function SelectNFT({nftList, setSelectedNFT}) {
  const classes = useStyles();

  const handleListItemClick = (nft) => {
    setSelectedNFT(nft);
  };

  return (
    <div className={classes.screenBackground}>
      <div className={classes.screen}>
        <Typography className={classes.font}>Select Your NFT</Typography>
        <Box className={classes.list}>
          <List>
            {nftList.map((nft) => (
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick(nft)}>
                  <ListItemText primary={nft.name} style={{color:'black'}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography className={classes.font} align={"right"}>Continue</Typography>
      </div>
    </div>
  )
}

export default SelectNFT;
