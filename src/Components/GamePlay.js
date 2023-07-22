import {Button, Grid, Paper, SvgIcon, Typography} from "@mui/material";
import React, {useEffect} from "react";
import {makeStyles} from "@mui/styles";
import { ReactComponent as ArrowIcon } from '../icons/arrow_button.svg';
import { ReactComponent as AttackIcon } from '../icons/attack_white.svg';
import { ReactComponent as ShieldIcon } from '../icons/health_white.svg';
import { ReactComponent as HealthIcon } from '../icons/health.svg';
import { ReactComponent as BatteryIcon } from '../icons/battery.svg';

const useStyles = (isDisabled) => makeStyles({
  screen: {
    height: '250px',
    width: '252px',
    border: '2px solid' + (!isDisabled ? '#45444a':disabledColors.screenBorder),
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    background: !isDisabled ? '#ffffff':disabledColors.screen,
    padding: '5px 7px 0px 7px',
    flexDirection: 'column',
  },
  screenBackground: {
    width: '282px',
    height: '266px',
    background: !isDisabled ? '#5F5F5F':disabledColors.screenBackground,
    borderRadius: '10px',
    alignItems: 'center',
    padding: '8px 15px 8px 15px',
    alignSelf: 'center',
  },
  font: {
    fontSize: '12px',
    fontWeight: 'lighter',
  },
  currentHealth: {
    backgroundColor: !isDisabled ? '#5E2F2F':disabledColors.health,
    height: '15px',
    width: '10px',
    marginBottom: '5px',
  },
  usedHealth: {
    backgroundColor: '#f6eeee',
    border: '1px solid #d3abab',
    height: '15px',
    width: '10px',
    marginBottom: '5px',
  },
  smallRoundButton: {
    width: '51px',
    height: '51px',
    minWidth: '51px',
    minHeight: '51px',
    background: !isDisabled ? '#564E4E':disabledColors.buttonsRight,
    border: '4px solid' + (!isDisabled ? '#282338':disabledColors.buttonBorder),
    borderRadius: '100%',
  },
  squareButton: {
    width: '50px',
    height: '50px',
    minWidth: '50px',
    minHeight: '50px',
    background: !isDisabled ? '#564E4E':disabledColors.buttonsRight,
    border: '4px solid' + (!isDisabled ? '#282338':disabledColors.buttonBorder),
    borderRadius: '11px',
  },
  largeRoundButton: {
    width: '100px',
    height: '100px',
    minWidth: '100px',
    minHeight: '100px',
    borderRadius: '100%',
    background: !isDisabled ? '#E2E2E2':disabledColors.buttonsLeft,
    border: '4px solid' + (!isDisabled ? '#cccccc':disabledColors.buttonBorder),
  }
});

const disabledColors = {
  buttonsRight: "#b0adad",
  buttonsLeft: "#ffffff",
  screen: "#d2d2d2",
  screenBorder: "#878689",
  screenBackground: "#b3b3b3",
  health: "#a39090",
  font: "#969696",
  buttonBorder: "#9e9ca4",
}

function GamePlay({isDisabled}) {

  const classes = useStyles(isDisabled)();

  const maxCount = 20;
  const currentCount = 10;
  const currentTurn = 1;
  const [time, setTime] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const handleAttack = () => {

  }

  const handleDodge = () => {

  }

  const handleHeal = () => {

  }

  return (
    <div>
      <div className={classes.screenBackground}>
        <div className={classes.screen}>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <Typography className={classes.font}>Current turn</Typography>
              <Typography className={classes.font}>{currentTurn}</Typography>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <Typography className={classes.font} sx={{paddingRight:'2px'}}>Remaining time</Typography>
                <BatteryIcon />
              </div>
              <Typography className={classes.font}>
                {Math.floor((time/6000) % 60)}:
                {Math.floor((time/100) % 60) < 10 ? "0" : ""}{Math.floor((time/100) % 60)}.
                {Math.floor((time) % 100) < 10 ? "0" : ""}{Math.floor((time) % 100)}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col">
            <Typography className={classes.font} alignSelf="end">{currentCount*200}/{maxCount*200}</Typography>
            <Grid container spacing={0.1} margin={0}>
              {Array.from(Array(maxCount).keys()).map((item, index) => (
                <Grid item xs={(index+1)%4===0}>
                  <Paper className={index < currentCount ? classes.currentHealth : classes.usedHealth} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4 items-center">
        <div className="pt-8">
          <SvgIcon component={ArrowIcon} viewBox="0 0 150 150" sx={{width:'120px', height:'120px'}}/>
        </div>
        <div className="flex items-center">
          <Button className={classes.smallRoundButton} onClick={handleAttack} startIcon={
            <div className="flex justify-center items-center pl-3">
              <AttackIcon/>
            </div>
          }/>
          <div className="flex flex-col justify-around gap-3">
            <Button className={classes.smallRoundButton} onClick={handleDodge} startIcon={
              <div className="flex justify-center items-center pl-3">
                <ShieldIcon/>
              </div>
            }/>
            <Button className={classes.squareButton} onClick={handleHeal} startIcon={
              <div className="pl-11 pt-8">
                <SvgIcon component={HealthIcon} sx={{ fontSize: 60}} />
              </div>
            }/>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between pt-4">
        <div>
          <Typography className={classes.font}>ETHCC EDITION</Typography>
        </div>
        <div className="flex pt-12 pr-5 gap-1">
          {Array.from(Array(4).keys()).map((item, index) => (
            <Paper sx={{
              width: '8px',
              height: '59px',
              borderRadius: '13px',
              background: '#D8D8D8',
              rotate: '30deg',
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GamePlay;