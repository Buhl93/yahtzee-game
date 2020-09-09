import React from "react";
import classes from "./PlayerList4.module.css";

export default function PlayerList4(props) {
  return (
    <div>
      <div className={classes.Column}>
        <div>
          <input
            className={`${classes.Box} ${classes.Top}`}
            type="text"
            placeholder="P 4"
            maxLength="3"
          />
        </div>
        <div className={classes.Box} onClick={() => props.ones(4)}>
          {props.playerFourOneSum !== 0 ? props.playerFourOneSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twos(4)}>
          {props.playerFourTwoSum !== 0 ? props.playerFourTwoSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threes(4)}>
          {props.playerFourThreeSum !== 0 ? props.playerFourThreeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fours(4)}>
          {props.playerFourFourSum !== 0 ? props.playerFourFourSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fives(4)}>
          {props.playerFourFiveSum !== 0 ? props.playerFourFiveSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.sixes(4)}>
          {props.playerFourSixSum !== 0 ? props.playerFourSixSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonus(4)}>
          {props.playerFourBonusSum !== 0 ? props.playerFourBonusSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonusSumHandler(4)}>
          {props.playerFourBonusRes !== 0 ? props.playerFourBonusRes : ""}
        </div>
        <div className={classes.Box} onClick={() => props.pair(4)}>
          {props.playerFourPairSum !== 0 ? props.playerFourPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twoPairs(4)}>
          {props.playerFourTwoPairSum !== 0 ? props.playerFourTwoPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threeOfAKind(4)}>
          {props.playerFourThreeOfAKindSum !== 0
            ? props.playerFourThreeOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fourOfAKind(4)}>
          {props.playerFourFourOfAKindSum !== 0
            ? props.playerFourFourOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.smallStraight(4)}>
          {props.playerFourSmallStraightSum !== 0
            ? props.playerFourSmallStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bigStraight(4)}>
          {props.playerFourBigStraightSum !== 0
            ? props.playerFourBigStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fullHouse(4)}>
          {props.playerFourFullHouseSum !== 0 ? props.playerFourFullHouseSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.chance(4)}>
          {props.playerFourChanceSum !== 0 ? props.playerFourChanceSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.yatze(4)}>
          {props.playerFourYatzeSum !== 0 ? props.playerFourYatzeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.totalScore(4)}>
        {props.playerFourTotalScoreSum !== 0 ? props.playerFourTotalScoreSum : ""}
        </div>
      </div>
    </div>
  );
}
