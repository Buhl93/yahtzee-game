import React from "react";
import classes from "./PlayerButton3.module.css";

const playerButton3 = (props) => (
  <button className={classes.PlayerButton} onClick={props.threePlayers}>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
  </button>
);

export default playerButton3;
