import React from 'react';
import classes from './RollCount.module.css';

const rollCount = (props) => <div className={classes.RollCount} >Times Rolled: {props.rollCount}</div>

export default rollCount