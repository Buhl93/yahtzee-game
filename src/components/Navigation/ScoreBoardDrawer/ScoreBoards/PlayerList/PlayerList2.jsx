import React from "react";
import classes from "./PlayerList2.module.css";

export default function PlayerList2(props) {
  return (
    <div>
      <div className={classes.Column}>
        <div>
          <input
            className={`${classes.Box} ${classes.Top}`}
            type="text"
            placeholder="P 2"
            maxLength="3"
          />
        </div>
        <div className={classes.Box} onClick={() => props.ones(2)}>
          {props.playerTwoOneSum !== 0 ? props.playerTwoOneSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twos(2)}>
          {props.playerTwoTwoSum !== 0 ? props.playerTwoTwoSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threes(2)}>
          {props.playerTwoThreeSum !== 0 ? props.playerTwoThreeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fours(2)}>
          {props.playerTwoFourSum !== 0 ? props.playerTwoFourSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fives(2)}>
          {props.playerTwoFiveSum !== 0 ? props.playerTwoFiveSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.sixes(2)}>
          {props.playerTwoSixSum !== 0 ? props.playerTwoSixSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonus(2)}>
          {props.playerTwoBonusSum !== 0 ? props.playerTwoBonusSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonusSumHandler(2)}>
          {props.playerTwoBonusRes !== 0 ? props.playerTwoBonusRes : ""}
        </div>
        <div className={classes.Box} onClick={() => props.pair(2)}>
          {props.playerTwoPairSum !== 0 ? props.playerTwoPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twoPairs(2)}>
          {props.playerTwoTwoPairSum !== 0 ? props.playerTwoTwoPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threeOfAKind(2)}>
          {props.playerTwoThreeOfAKindSum !== 0
            ? props.playerTwoThreeOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fourOfAKind(2)}>
          {props.playerTwoFourOfAKindSum !== 0
            ? props.playerTwoFourOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.smallStraight(2)}>
          {props.playerTwoSmallStraightSum !== 0
            ? props.playerTwoSmallStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bigStraight(2)}>
          {props.playerTwoBigStraightSum !== 0
            ? props.playerTwoBigStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fullHouse(2)}>
          {props.playerTwoFullHouseSum !== 0 ? props.playerTwoFullHouseSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.chance(2)}>
          {props.playerTwoChanceSum !== 0 ? props.playerTwoChanceSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.yatze(2)}>
          {props.playerTwoYatzeSum !== 0 ? props.playerTwoYatzeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.totalScore(2)}>
        {props.playerTwoTotalScoreSum !== 0 ? props.playerTwoTotalScoreSum : ""}
        </div>
      </div>
    </div>
  );
}
