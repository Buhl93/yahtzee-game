import React from "react";
import classes from "./DarkModeSwitch.module.css";

const darkModeSwitch = (props) => (
  <div className={classes.DarkModeSwitch}>
    <p className={classes.SwitchText}>Dark Mode</p>
    <div>
      <label className={classes.switch}>
        <input onClick={props.toggleDarkMode} type="checkbox" />
        <span className={classes.slider}></span>
      </label>
    </div>
  </div>
);

export default darkModeSwitch;
