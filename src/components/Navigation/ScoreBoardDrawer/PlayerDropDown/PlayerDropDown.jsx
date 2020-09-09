import React from "react";
import classes from "./PlayerDropDown.module.css";
import PlayerCount from "../PlayerCount/PlayerCount";

export default function PlayerDropDown(props) {
  let players = [];
  for (let i = 0; i < props.numOfPlayers; i++) {
    players.push(<i className="las la-user" key={i}></i>);
  }

  return (
    <div>
      <button className={classes.Button} onClick={props.togglePlayerDropDown}>
        <div className={classes.Players}>{players}</div>
        {props.playerDropDownOpen ? <i className="las la-angle-up"></i> : <i className="las la-angle-down"></i>}
      </button>
      <PlayerCount
        playerDropDownOpen={props.playerDropDownOpen}
        twoPlayers={props.twoPlayers}
        threePlayers={props.threePlayers}
        fourPlayers={props.fourPlayers}
      />
    </div>
  );
}
