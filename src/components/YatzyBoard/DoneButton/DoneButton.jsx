import React from 'react';
import classes from './DoneButton.module.css';

const doneButton = (props) => <button className={classes.DoneButton} onClick={props.resetBoard}>End Turn</button>

export default doneButton;