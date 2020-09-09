import React from "react";
import classes from "./ScoreBoardToggle.module.css";

const scoreBoardToggle = (props) => {
  return (
    <div className={classes.ToggleButton} onClick={props.toggleScoreBoardDrawer}>
      <i className="las la-table"></i>
    </div>
  );
};

export default scoreBoardToggle;
