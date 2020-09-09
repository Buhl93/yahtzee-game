import React from "react";
import classes from "./DisplayRollDice.module.css";
import DieValue from "./DieValue/DieValue";

const displayRollDice = (props) => {
  let Dice = props.diceValues.map((iKey, i) => (
    <DieValue
      key={i}
      sequenceNumber={i}
      type={iKey}
      removeDie={props.removeDie}
      saveDie={props.saveDie}
      rollCount={props.rollCount}
    />
  ));

  return <div className={classes.DiceLayout}>{Dice}</div>;
};

export default displayRollDice;
