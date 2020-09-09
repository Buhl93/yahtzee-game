import React from "react";
import DisplaySavedDice from "./DisplaySavedDice/DisplaySavedDice";
import DisplaySum from './DisplaySum/DisplaySum';

const savedDice = (props) => (
  <div>
    <DisplaySavedDice savedDice={props.savedDice} removeDie={props.removeDie} returnDie={props.returnDie} />
    <DisplaySum savedDice={props.savedDice}/>
  </div>
);

export default savedDice;
