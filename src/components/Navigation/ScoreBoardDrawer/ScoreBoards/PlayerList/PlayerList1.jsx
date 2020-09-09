import React from "react";
import classes from "./PlayerList1.module.css";

export default function PlayerList1(props) {
  return (
    <div>
      <div className={classes.Column}>
        <div>
          <input
            className={`${classes.Box} ${classes.Top}`}
            type="text"
            placeholder="P 1"
            maxLength="3"
          />
        </div>
        <div className={classes.Box} onClick={() => props.ones(1)}>
          {props.playerOneOneSum !== 0 ? props.playerOneOneSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twos(1)}>
          {props.playerOneTwoSum !== 0 ? props.playerOneTwoSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threes(1)}>
          {props.playerOneThreeSum !== 0 ? props.playerOneThreeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fours(1)}>
          {props.playerOneFourSum !== 0 ? props.playerOneFourSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fives(1)}>
          {props.playerOneFiveSum !== 0 ? props.playerOneFiveSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.sixes(1)}>
          {props.playerOneSixSum !== 0 ? props.playerOneSixSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonus(1)}>
          {props.playerOneBonusSum !== 0 ? props.playerOneBonusSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonusSumHandler(1)}>
          {props.playerOneBonusRes !== 0 ? props.playerOneBonusRes : ""}
        </div>
        <div className={classes.Box} onClick={() => props.pair(1)}>
          {props.playerOnePairSum !== 0 ? props.playerOnePairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twoPairs(1)}>
          {props.playerOneTwoPairSum !== 0 ? props.playerOneTwoPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threeOfAKind(1)}>
          {props.playerOneThreeOfAKindSum !== 0
            ? props.playerOneThreeOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fourOfAKind(1)}>
          {props.playerOneFourOfAKindSum !== 0
            ? props.playerOneFourOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.smallStraight(1)}>
          {props.playerOneSmallStraightSum !== 0
            ? props.playerOneSmallStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bigStraight(1)}>
          {props.playerOneBigStraightSum !== 0
            ? props.playerOneBigStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fullHouse(1)}>
          {props.playerOneFullHouseSum !== 0 ? props.playerOneFullHouseSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.chance(1)}>
          {props.playerOneChanceSum !== 0 ? props.playerOneChanceSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.yatze(1)}>
          {props.playerOneYatzeSum !== 0 ? props.playerOneYatzeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.totalScore(1)}>
        {props.playerOneTotalScoreSum !== 0 ? props.playerOneTotalScoreSum : ""}
        </div>
      </div>
    </div>
  );
}
