import React from "react";
import PlayerButton2 from "./PlayerButton2/PlayerButton2";
import PlayerButton3 from "./PlayerButton3/PlayerButton3";
import PlayerButton4 from "./PlayerButton4/PlayerButton4";
import classes from "./PlayerCount.module.css";

const playerCount = (props) => {
  let dropClasses;
  if (!props.playerDropDownOpen) {
    dropClasses = classes.Layout;
  } else {
    dropClasses = `${classes.Layout} ${classes.Show}`;
  }

  return (
    <div className={dropClasses}>
      <PlayerButton2 twoPlayers={props.twoPlayers} />
      <PlayerButton3 threePlayers={props.threePlayers} />
      <PlayerButton4 fourPlayers={props.fourPlayers} />
    </div>
  );
};

export default playerCount;
