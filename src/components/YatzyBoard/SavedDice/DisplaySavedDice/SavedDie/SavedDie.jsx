import React, { Component } from "react";

import classes from "./SavedDie.module.css";

class SavedDie extends Component {
  render() {
    let dieValue = null;
    const clickAction = () => {
      this.props.returnDie(this.props.type);
      this.props.removeDie(this.props.sequenceNumber);
    };

    switch (this.props.type) {
      case 1:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Firstface}`}
          >
            <span className={classes.Dot}></span>
          </div>
        );
        break;
      case 2:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Secondface}`}
          >
            <span className={classes.Dot}></span>
            <span className={classes.Dot}></span>
          </div>
        );
        break;
      case 3:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Thirdface}`}
          >
            <span className={classes.Dot}></span>
            <span className={classes.Dot}></span>
            <span className={classes.Dot}></span>
          </div>
        );
        break;
      case 4:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Fourthface}`}
          >
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
          </div>
        );
        break;
      case 5:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Fifthface}`}
          >
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
            </div>
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
          </div>
        );
        break;
      case 6:
        dieValue = (
          <div
            onClick={clickAction}
            className={`${classes.Die} ${classes.Sixthface}`}
          >
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
            <div className={classes.Column}>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
              <span className={classes.Dot}></span>
            </div>
          </div>
        );
        break;
      default:
        break;
    }

    return dieValue;
  }
}

export default SavedDie;
