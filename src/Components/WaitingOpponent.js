import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";


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
  }
});

function WaitingOpponent() {

  const classes = useStyles();

  return (
    <div className={classes.screenBackground}>
      <div className={classes.screen}>
        <div className="flex flex-col align-top gap-14 text-center pt-3">
          <div className="flex flex-col items-center">
            <Typography className="text-2xl font-bold">Get Ready</Typography>
            <Typography className="text-2xl font-bold animate-pulse">Waiting For Next Player</Typography>
          </div>
          <Typography className="text-2xl font-bold">NFT A STAKE</Typography>
        </div>
      </div>
    </div>
  );
}

export default WaitingOpponent;