import React from "react";
import classes from "./PlayerButton4.module.css";

const playerButton4 = (props) => (
  <button className={classes.PlayerButton} onClick={props.fourPlayers}>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
  </button>
);

export default playerButton4;
