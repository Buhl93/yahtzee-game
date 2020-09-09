import React from "react";
import classes from "./ScoreBoard.module.css";

const scoreBoard = (props) => {
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;
  let bonus = 0;
  let bonusMax = 0;
  let bonusTotal = 0;
  let pair = 2 * 6;
  let twoPair = 2 * 6 + 2 * 5;
  let threeALike = 3 * 6;
  let fourALike = 4 * 6;
  let smallStraight = 1 + 2 + 3 + 4 + 5;
  let bigStraight = 2 + 3 + 4 + 5 + 6;
  let fullHouse = 3 * 6 + 2 * 5;
  let chance = 0;
  let yatze = 0;
  let totalScore = 0;

  if (props.superYatzy) {
    ones = 1 * 6;
    twos = 2 * 6;
    threes = 3 * 6;
    fours = 4 * 6;
    fives = 5 * 6;
    sixes = 6 * 6;
    bonus = 1 * 4 + 2 * 4 + 3 * 4 + 4 * 4 + 5 * 4 + 6 * 4;
    bonusMax = 1 * 6 + 2 * 6 + 3 * 6 + 4 * 6 + 5 * 6 + 6 * 6;
    bonusTotal = bonusMax + 50;
    chance = 6 * 6;
    yatze = 6 * 6 + 50;
    totalScore =
      ones +
      twos +
      threes +
      fours +
      fives +
      sixes +
      bonusTotal +
      pair +
      twoPair +
      threeALike +
      fourALike +
      fullHouse +
      chance +
      yatze;
  } else {
    ones = 1 * 5;
    twos = 2 * 5;
    threes = 3 * 5;
    fours = 4 * 5;
    fives = 5 * 5;
    sixes = 6 * 5;
    bonus = 1 * 3 + 2 * 3 + 3 * 3 + 4 * 3 + 5 * 3 + 6 * 3;
    bonusMax = 1 * 5 + 2 * 5 + 3 * 5 + 4 * 5 + 5 * 5 + 6 * 5;
    bonusTotal = bonusMax + 50;
    chance = 6 * 5;
    yatze = 6 * 5 + 50;
    totalScore =
      ones +
      twos +
      threes +
      fours +
      fives +
      sixes +
      bonusTotal +
      pair +
      twoPair +
      threeALike +
      fourALike +
      fullHouse +
      chance +
      yatze;
  }

  return (
    <div className={classes.Column}>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left} ${classes.Top}`}>
          Players
        </div>
        <div className={`${classes.Box} ${classes.Top}`}>Max</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>1s</div>
        <div className={classes.Box}>{ones}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>2s</div>
        <div className={classes.Box}>{twos}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>3s</div>
        <div className={classes.Box}>{threes}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>4s</div>
        <div className={classes.Box}>{fours}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>5s</div>
        <div className={classes.Box}>{fives}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>6s</div>
        <div className={classes.Box}>{sixes}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Bonus >= {bonus}</div>
        <div className={classes.Box}>{bonusMax}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Total + 50</div>
        <div className={classes.Box}>{bonusTotal}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Pair</div>
        <div className={classes.Box}>{pair}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>2 Pairs</div>
        <div className={classes.Box}>{twoPair}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Three of a kind</div>
        <div className={classes.Box}>{threeALike}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Four of a kind</div>
        <div className={classes.Box}>{fourALike}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Small straight</div>
        <div className={classes.Box}>{smallStraight}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Big Straight</div>
        <div className={classes.Box}>{bigStraight}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Full House</div>
        <div className={classes.Box}>{fullHouse}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Chance</div>
        <div className={classes.Box}>{chance}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Yatzee!</div>
        <div className={classes.Box}>{yatze}</div>
      </div>
      <div className={classes.Row}>
        <div className={`${classes.Box} ${classes.Left}`}>Total</div>
        <div className={classes.Box}>{totalScore}</div>
      </div>
    </div>
  );
};

export default scoreBoard;
