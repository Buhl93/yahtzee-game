import React from "react";
import classes from "./CrossTool.module.css";

export default function CrossTool(props) {
  let crossClasses;

    if (props.crossToolSelected) {
        crossClasses = `${classes.Button} ${classes.Selected}`
    } else {
        crossClasses = classes.Button
    }
  return (
    <div className={classes.CrossTool}>
      <button className={crossClasses} onClick={props.crossTool}>
        <i className="las la-minus-square"></i>
      </button>
      <p>Cross tool</p>
    </div>
  );
}
