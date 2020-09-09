import React from "react";
import SavedDie from "./SavedDie/SavedDie";
import classes from "./DisplaySavedDice.module.css";

const displaySavedDice = (props) => {
  let Dice = props.savedDice.map((iKey, i) => (
    <SavedDie
      key={i}
      type={iKey}
      sequenceNumber={i}
      removeDie={props.removeDie}
      returnDie={props.returnDie}
    />
  ));

  return <div className={classes.DiceLayout}>{Dice}</div>;
};

export default displaySavedDice;
