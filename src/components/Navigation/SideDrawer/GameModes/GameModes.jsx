import React from "react";
import classes from "./GameModes.module.css";

const gameModes = (props) => (
  <div className={classes.GameModes}>
    <li onClick={props.classicYatzyToggle}>Classic Yatzy<br/>5 dice</li>
    <li onClick={props.superYatzyToggle}>Super Yatzy<br/>6 dice</li>
  </div>
);

export default gameModes;
