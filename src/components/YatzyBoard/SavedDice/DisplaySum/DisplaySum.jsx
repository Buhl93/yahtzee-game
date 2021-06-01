import React from "react";
import classes from "./DisplaySum.module.css";

const displaySum = (props) => <div className={classes.Sum}>Saved dice sum: {props.savedDice.reduce((sum, current) => {
return sum + current;
}, 0)}</div>;

export default displaySum;
