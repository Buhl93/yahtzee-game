import React from "react";
import classes from "./PlayerButton2.module.css";

const playerButton2 = (props) => (
  <button className={classes.PlayerButton} onClick={props.twoPlayers}>
    <i className="las la-user"></i>
    <i className="las la-user"></i>
  </button>
);

export default playerButton2;
