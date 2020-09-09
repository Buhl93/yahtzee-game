import React from "react";
import classes from "./PlayerList3.module.css";

export default function PlayerList3(props) {
  return (
    <div>
      <div className={classes.Column}>
        <div>
          <input
            className={`${classes.Box} ${classes.Top}`}
            type="text"
            placeholder="P 3"
            maxLength="3"
          />
        </div>
        <div className={classes.Box} onClick={() => props.ones(3)}>
          {props.playerThreeOneSum !== 0 ? props.playerThreeOneSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twos(3)}>
          {props.playerThreeTwoSum !== 0 ? props.playerThreeTwoSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threes(3)}>
          {props.playerThreeThreeSum !== 0 ? props.playerThreeThreeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fours(3)}>
          {props.playerThreeFourSum !== 0 ? props.playerThreeFourSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fives(3)}>
          {props.playerThreeFiveSum !== 0 ? props.playerThreeFiveSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.sixes(3)}>
          {props.playerThreeSixSum !== 0 ? props.playerThreeSixSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonus(3)}>
          {props.playerThreeBonusSum !== 0 ? props.playerThreeBonusSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bonusSumHandler(3)}>
          {props.playerThreeBonusRes !== 0 ? props.playerThreeBonusRes : ""}
        </div>
        <div className={classes.Box} onClick={() => props.pair(3)}>
          {props.playerThreePairSum !== 0 ? props.playerThreePairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.twoPairs(3)}>
          {props.playerThreeTwoPairSum !== 0 ? props.playerThreeTwoPairSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.threeOfAKind(3)}>
          {props.playerThreeThreeOfAKindSum !== 0
            ? props.playerThreeThreeOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fourOfAKind(3)}>
          {props.playerThreeFourOfAKindSum !== 0
            ? props.playerThreeFourOfAKindSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.smallStraight(3)}>
          {props.playerThreeSmallStraightSum !== 0
            ? props.playerThreeSmallStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.bigStraight(3)}>
          {props.playerThreeBigStraightSum !== 0
            ? props.playerThreeBigStraightSum
            : ""}
        </div>
        <div className={classes.Box} onClick={() => props.fullHouse(3)}>
          {props.playerThreeFullHouseSum !== 0 ? props.playerThreeFullHouseSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.chance(3)}>
          {props.playerThreeChanceSum !== 0 ? props.playerThreeChanceSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.yatze(3)}>
          {props.playerThreeYatzeSum !== 0 ? props.playerThreeYatzeSum : ""}
        </div>
        <div className={classes.Box} onClick={() => props.totalScore(3)}>
        {props.playerThreeTotalScoreSum !== 0 ? props.playerThreeTotalScoreSum : ""}
        </div>
      </div>
    </div>
  );
}
