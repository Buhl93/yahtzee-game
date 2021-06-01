import React from "react";
import classes from "./EraserTool.module.css";

export default function EraserTool(props) {
    let eraserClasses;

    if (props.eraserToolSelected) {
        eraserClasses = `${classes.Button} ${classes.Selected}`
    } else {
        eraserClasses = classes.Button
    }
  return (
    <div className={classes.Eraser}>
      <button className={eraserClasses} onClick={props.eraserTool}>
        <i className="las la-eraser"></i>
      </button>
      <p>Eraser</p>
    </div>
  );
}
