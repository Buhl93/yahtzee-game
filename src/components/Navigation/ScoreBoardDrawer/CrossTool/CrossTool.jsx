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
    <div>
      <button className={crossClasses} onClick={props.crossTool}>
        <i className="las la-minus-square"></i>
      </button>
    </div>
  );
}
