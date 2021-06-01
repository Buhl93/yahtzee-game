import React from 'react';
import classes from './ScoreboardButton.module.css';

const scoreboardButton = (props) => <button className={classes.ScoreboardButton} onClick={props.toggleScoreBoardDrawer}>Scoreboard</button>

export default scoreboardButton;