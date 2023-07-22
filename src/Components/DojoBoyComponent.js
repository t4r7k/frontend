import React, {useState} from 'react';
import {Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GamePlay from "./GamePlay";
import SelectNFT from "./SelectNFT";
import WaitingOpponent from "./WaitingOpponent";

const useStyles = (isDisabled) => makeStyles({
  root: {
    width: '332px',
    height: '634px',
    background: !isDisabled ? '#ffffff':disabledColors.root,
    border: '5px solid' + (!isDisabled ? '#5F5F5F':disabledColors.rootBorder),
    borderRadius: '9px 9px 44px 9px',
    position: 'relative',
    padding: '10px 15px 10px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    background: !isDisabled ? '#D8D8D8':disabledColors.header,
    borderRadius: '50px',
    marginBottom: '10px',
    padding: '8px',
    textAlign: 'center',
    width: '35%',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: '13px',
  },
});

const disabledColors = {
  root: "#ededed",
  rootBorder: "#acacac",
  header: "#e4e4e4",
}

function DojoBoyComponent(props) {
  const { isDisabled } = props;
  const classes = useStyles(isDisabled)();

  const [isConnected, setIsConnected] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [iswaitingForOpponent, setIsWaitingForOpponent] = useState(false);

  const nftList = [
    {
      name: "NFT 1",
      image: "https://placekitten.com/200/300",
      address: "0x1234567890",
    },
    {
      name: "NFT 2",
      image: "https://placekitten.com/200/300",
      address: "0x1234567890",
    },
    {
      name: "NFT 3",
      image: "https://placekitten.com/200/300",
      address: "0x1234567890",
    }
  ];

  const connectWallet = () => {
    // TODO: Connect to wallet
    setIsConnected(true);
  }

  return (
    <button className={classes.root} onClick={connectWallet} disabled={isConnected}>
      <Typography className={classes.header}>DojoBoy</Typography>
      {!isConnected && <Typography className="align-middle">Connect Your Wallet</Typography>}
      {isConnected && !selectedNFT && <SelectNFT nftList={nftList} setSelectedNFT={setSelectedNFT}/>}
      {isConnected && selectedNFT && iswaitingForOpponent && <WaitingOpponent />}
      {isConnected && selectedNFT && !iswaitingForOpponent && <GamePlay isDisabled={isDisabled} />}
    </button>
  );
}

export default DojoBoyComponent;