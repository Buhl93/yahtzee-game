import React from "react";
import DisplayRollDice from "./DisplayRollDice/DisplayRollDice";
import RollButton from "./RollButton/RollButton";
import RollCount from './RollCount/RollCount';
import classes from "./RollDice.module.css";

const rollDice = (props) => (
  <>
    <div className={classes.RollDice}>
      <DisplayRollDice diceValues={props.diceValues} removeDie={props.removeDie} saveDie={props.saveDie} rollCount={props.rollCount} />
    </div>
    <RollCount rollCount={props.rollCount}/>
    <RollButton roll={props.rollClicker} rollCount={props.rollCount}>Roll</RollButton>
  </>
);

export default rollDice;
