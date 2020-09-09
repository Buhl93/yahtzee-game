import React from "react";
import classes from "./RollButton.module.css";

const rollButton = (props) => (
  <button className={classes.RollButton} onClick={props.roll} disabled={props.rollCount === 3}>
    {props.children}
  </button>
);

export default rollButton;
