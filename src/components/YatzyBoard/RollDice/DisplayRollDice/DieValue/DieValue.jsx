import React, { Component } from "react";

import classes from "./DieValue.module.css";

class DieValue extends Component {
  render() {
    let dieValue = null;
    const clickAction = () => {
      this.props.removeDie(this.props.sequenceNumber);
      this.props.saveDie(this.props.type);
    };

    switch (this.props.type) {
      case 1:
        dieValue = (
          <div
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Firstface}` : `${classes.Die} ${classes.Firstface}`}
          >
            <span className={classes.Dot}></span>
          </div>
        );
        break;
      case 2:
        dieValue = (
          <div
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Secondface}` : `${classes.Die} ${classes.Secondface}`}
          >
            <span className={classes.Dot}></span>
            <span className={classes.Dot}></span>
          </div>
        );
        break;
      case 3:
        dieValue = (
          <div
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Thirdface}` : `${classes.Die} ${classes.Thirdface}`}
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
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Fourthface}` : `${classes.Die} ${classes.Fourthface}`}
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
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Fifthface}` : `${classes.Die} ${classes.Fifthface}`}
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
            onClick={this.props.rollCount !== 0 ? clickAction : null}
            className={this.props.rollCount === 0 ? `${classes.DieDisable} ${classes.Sixthface}` : `${classes.Die} ${classes.Sixthface}`}
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

export default DieValue;
