import React, { Component } from "react";
import RollDice from "../../components/YatzyBoard/RollDice/RollDice";
import SavedDice from "../../components/YatzyBoard/SavedDice/SavedDice";
import DoneButton from "../../components/YatzyBoard/DoneButton/DoneButton";
import classes from "./YatzyGame.module.css";
import ScoreBoardDrawer from "../../components/Navigation/ScoreBoardDrawer/ScoreBoardDrawer";
import ScoreBoardToggle from "../../components/Navigation/ScoreBoardDrawer/ScoreBoardToggle/ScoreBoardToggle";
import CrossTool from "../../components/Navigation/ScoreBoardDrawer/CrossTool/CrossTool";
import EraserTool from "../../components/Navigation/ScoreBoardDrawer/EraserTool/EraserTool";
import DrawerToggle from "../../components/Navigation/SideDrawer/SideDrawerToggle/DrawerToggle";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class YatzyGame extends Component {
  state = {
    SideDrawerOpen: false,
    DiceValue: [1, 2, 3, 4, 5],
    SavedDice: [],
    CrossTool: false,
    EraserTool: false,
    RollCount: 0,
    SuperYatzy: false,
    DarkMode: false,
    ScoreBoardDrawerOpen: false,
    PlayerDropDownOpen: false,
    NumberOfPlayers: 2,
    crossOnes: 0,
    crossTwos: 0,
    crossThrees: 0,
    crossFours: 0,
    crossFives: 0,
    crossSixes: 0,
    crossBonusSum: 0,
    crossPair: 0,
    crossTwoPair: 0,
    crossThreeAlike: 0,
    crossFourAlike: 0,
    crossSmallStraight: 0,
    crossBigStraight: 0,
    crossFullHouse: 0,
    crossChance: 0,
    crossYatze: 0,
    PlayerOneOneSum: 0,
    PlayerTwoOneSum: 0,
    PlayerThreeOneSum: 0,
    PlayerFourOneSum: 0,
    PlayerOneTwoSum: 0,
    PlayerTwoTwoSum: 0,
    PlayerThreeTwoSum: 0,
    PlayerFourTwoSum: 0,
    PlayerOneThreeSum: 0,
    PlayerTwoThreeSum: 0,
    PlayerThreeThreeSum: 0,
    PlayerFourThreeSum: 0,
    PlayerOneFourSum: 0,
    PlayerTwoFourSum: 0,
    PlayerThreeFourSum: 0,
    PlayerFourFourSum: 0,
    PlayerOneFiveSum: 0,
    PlayerTwoFiveSum: 0,
    PlayerThreeFiveSum: 0,
    PlayerFourFiveSum: 0,
    PlayerOneSixSum: 0,
    PlayerTwoSixSum: 0,
    PlayerThreeSixSum: 0,
    PlayerFourSixSum: 0,
    PlayerOneBonusSum: 0,
    PlayerTwoBonusSum: 0,
    PlayerThreeBonusSum: 0,
    PlayerFourBonusSum: 0,
    PlayerOneBonusRes: 0,
    PlayerTwoBonusRes: 0,
    PlayerThreeBonusRes: 0,
    PlayerFourBonusRes: 0,
    PlayerOnePairSum: 0,
    PlayerTwoPairSum: 0,
    PlayerThreePairSum: 0,
    PlayerFourPairSum: 0,
    PlayerOneTwoPairSum: 0,
    PlayerTwoTwoPairSum: 0,
    PlayerThreeTwoPairSum: 0,
    PlayerFourTwoPairSum: 0,
    PlayerOneThreeOfAKindSum: 0,
    PlayerTwoThreeOfAKindSum: 0,
    PlayerThreeThreeOfAKindSum: 0,
    PlayerFourThreeOfAKindSum: 0,
    PlayerOneFourOfAKindSum: 0,
    PlayerTwoFourOfAKindSum: 0,
    PlayerThreeFourOfAKindSum: 0,
    PlayerFourFourOfAKindSum: 0,
    PlayerOneSmallStraightSum: 0,
    PlayerTwoSmallStraightSum: 0,
    PlayerThreeSmallStraightSum: 0,
    PlayerFourSmallStraightSum: 0,
    PlayerOneBigStraightSum: 0,
    PlayerTwoBigStraightSum: 0,
    PlayerThreeBigStraightSum: 0,
    PlayerFourBigStraightSum: 0,
    PlayerOneFullHouseSum: 0,
    PlayerTwoFullHouseSum: 0,
    PlayerThreeFullHouseSum: 0,
    PlayerFourFullHouseSum: 0,
    PlayerOneChanceSum: 0,
    PlayerTwoChanceSum: 0,
    PlayerThreeChanceSum: 0,
    PlayerFourChanceSum: 0,
    PlayerOneYatzeSum: 0,
    PlayerTwoYatzeSum: 0,
    PlayerThreeYatzeSum: 0,
    PlayerFourYatzeSum: 0,
    PlayerOneTotalScoreSum: 0,
    PlayerTwoTotalScoreSum: 0,
    PlayerThreeTotalScoreSum: 0,
    PlayerFourTotalScoreSum: 0,
  };
  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  superYatzyToggleHandler = () => {
    this.setState({
      SuperYatzy: true,
      SideDrawerOpen: false,
      DiceValue: [1, 2, 3, 4, 5, 6],
    });
  };

  classicYatzyToggleHandler = () => {
    this.setState({
      SuperYatzy: false,
      SideDrawerOpen: false,
      DiceValue: [1, 2, 3, 4, 5],
    });
  };

  toggleDarkModeHandler = () => {
    this.setState((prevState) => {
      return { DarkMode: !prevState.DarkMode };
    });
  };

  toggleScoreBoardDrawerHandler = () => {
    this.setState((prevState) => {
      return { ScoreBoardDrawerOpen: !prevState.ScoreBoardDrawerOpen };
    });
  };

  togglePlayerDropDownHandler = () => {
    this.setState((prevState) => {
      return { PlayerDropDownOpen: !prevState.PlayerDropDownOpen };
    });
  };

  randomRollHandler = () => {
    let dice = [...this.state.DiceValue];
    let newDice = dice.map((iKey) => {
      return (iKey = Math.round(Math.random() * 5) + 1);
    });
    // increment roll count
    let count = this.state.RollCount;
    count++;
    this.setState({ DiceValue: newDice, RollCount: count });
  };

  removeDieHandler = (sequenceNumber) => {
    let dice = [...this.state.DiceValue];
    dice.splice(sequenceNumber, 1);
    this.setState({ DiceValue: dice });
  };

  removeSavedDieHandler = (sequenceNumber) => {
    let dice = [...this.state.SavedDice];
    dice.splice(sequenceNumber, 1);
    this.setState({ SavedDice: dice });
  };

  saveDieHandler = (type) => {
    let dice = [...this.state.SavedDice];
    dice.push(type);
    this.setState({ SavedDice: dice });
  };

  returnDieHandler = (type) => {
    let dice = [...this.state.DiceValue];
    dice.push(type);
    this.setState({ DiceValue: dice });
  };

  resetBoardHandler = () => {
    let dice = [];
    if (this.state.SuperYatzy) {
      dice = [1, 2, 3, 4, 5, 6];
    } else {
      dice = [1, 2, 3, 4, 5];
    }
    this.setState({ DiceValue: dice, SavedDice: [], RollCount: 0 });
  };

  DarkModeHandler = () => {
    this.setState((prevState) => {
      return { DarkMode: !prevState.DarkMode };
    });
  };

  toggleScoreBoardDrawerHandler = () => {
    this.setState((prevState) => {
      return { ScoreBoardDrawerOpen: !prevState.ScoreBoardDrawerOpen };
    });
  };

  numOfPlayers2Handler = () => {
    this.setState({ NumberOfPlayers: 2, PlayerDropDownOpen: false });
  };

  numOfPlayers3Handler = () => {
    this.setState({ NumberOfPlayers: 3, PlayerDropDownOpen: false });
  };

  numOfPlayers4Handler = () => {
    this.setState({ NumberOfPlayers: 4, PlayerDropDownOpen: false });
  };

  crossToolHandler = () => {
    this.setState({ EraserTool: false });
    this.setState((prevState) => {
      return { CrossTool: !prevState.CrossTool };
    });
  };

  eraserToolHandler = () => {
    this.setState({ CrossTool: false });
    this.setState((prevState) => {
      return { EraserTool: !prevState.EraserTool };
    });
  };

  eraserAndCross(player) {
    let DiceSum;
    if (player === 1) {
      if (this.state.CrossTool) {
        DiceSum = "-";
        this.setState({ CrossTool: false });
      } else if (this.state.EraserTool) {
        DiceSum = 0;
        this.setState({ EraserTool: false });
      }
    } else if (player === 2) {
      if (this.state.CrossTool) {
        DiceSum = "-";
        this.setState({ CrossTool: false });
      } else if (this.state.EraserTool) {
        DiceSum = 0;
        this.setState({ EraserTool: false });
      }
    } else if (player === 3) {
      if (this.state.CrossTool) {
        DiceSum = "-";
        this.setState({ CrossTool: false });
      } else if (this.state.EraserTool) {
        DiceSum = 0;
        this.setState({ EraserTool: false });
      }
    } else if (player === 4) {
      if (this.state.CrossTool) {
        DiceSum = "-";
        this.setState({ CrossTool: false });
      } else if (this.state.EraserTool) {
        DiceSum = 0;
        this.setState({ EraserTool: false });
      }
    }
    return DiceSum;
  }

  /* Scoreboard logic */

  onesHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let OneDice = Dice.filter((dice) => dice === 1);
    let DiceSum = this.eraserAndCross(player);

    if (OneDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = OneDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1 && DiceSum !== undefined) {
      this.setState({ PlayerOneOneSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoOneSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeOneSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourOneSum: DiceSum });
    }
  };

  twosHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);
    let TwoDice = Dice.filter((dice) => dice === 2);

    if (TwoDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = TwoDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1) {
      this.setState({ PlayerOneTwoSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoTwoSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeTwoSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourTwoSum: DiceSum });
    }
  };

  threesHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);
    let ThreeDice = Dice.filter((dice) => dice === 3);

    if (ThreeDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = ThreeDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1) {
      this.setState({ PlayerOneThreeSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoThreeSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeThreeSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourThreeSum: DiceSum });
    }
  };

  foursHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);
    let FourDice = Dice.filter((dice) => dice === 4);

    if (FourDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = FourDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1) {
      this.setState({ PlayerOneFourSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoFourSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeFourSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourFourSum: DiceSum });
    }
  };

  fivesHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);
    let FiveDice = Dice.filter((dice) => dice === 5);

    if (FiveDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = FiveDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1) {
      this.setState({ PlayerOneFiveSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoFiveSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeFiveSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourFiveSum: DiceSum });
    }
  };

  sixesHandler = (player) => {
    let Dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);
    let SixDice = Dice.filter((dice) => dice === 6);

    if (SixDice.length > 0 && !(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = SixDice.reduce((sum, dice) => sum + dice);
    }

    if (player === 1) {
      this.setState({ PlayerOneSixSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoSixSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeSixSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourSixSum: DiceSum });
    }
  };

  bonusHandler = (player) => {
    let DiceSum = this.eraserAndCross(player);
    let Sums = [];

    if (player === 1) {
      if (this.state.PlayerOneOneSum && this.state.PlayerOneOneSum !== "-") {
        Sums.push(this.state.PlayerOneOneSum);
      }
      if (this.state.PlayerOneTwoSum && this.state.PlayerOneTwoSum !== "-") {
        Sums.push(this.state.PlayerOneTwoSum);
      }
      if (
        this.state.PlayerOneThreeSum &&
        this.state.PlayerOneThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneThreeSum);
      }
      if (this.state.PlayerOneFourSum && this.state.PlayerOneFourSum !== "-") {
        Sums.push(this.state.PlayerOneFourSum);
      }
      if (this.state.PlayerOneFiveSum && this.state.PlayerOneFiveSum !== "-") {
        Sums.push(this.state.PlayerOneFiveSum);
      }
      if (this.state.PlayerOneSixSum && this.state.PlayerOneSixSum !== "-") {
        Sums.push(this.state.PlayerOneSixSum);
      }
      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }

      if (
        this.state.PlayerOneOneSum &&
        this.state.PlayerOneTwoSum &&
        this.state.PlayerOneThreeSum &&
        this.state.PlayerOneFourSum &&
        this.state.PlayerOneFiveSum &&
        this.state.PlayerOneSixSum
      )
        this.setState({ PlayerOneBonusSum: DiceSum });
    } else if (player === 2) {
      if (this.state.PlayerTwoOneSum && this.state.PlayerTwoOneSum !== "-") {
        Sums.push(this.state.PlayerTwoOneSum);
      }
      if (this.state.PlayerTwoTwoSum && this.state.PlayerTwoTwoSum !== "-") {
        Sums.push(this.state.PlayerTwoTwoSum);
      }
      if (
        this.state.PlayerTwoThreeSum &&
        this.state.PlayerTwoThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoThreeSum);
      }
      if (this.state.PlayerTwoFourSum && this.state.PlayerTwoFourSum !== "-") {
        Sums.push(this.state.PlayerTwoFourSum);
      }
      if (this.state.PlayerTwoFiveSum && this.state.PlayerTwoFiveSum !== "-") {
        Sums.push(this.state.PlayerTwoFiveSum);
      }
      if (this.state.PlayerTwoSixSum && this.state.PlayerTwoSixSum !== "-") {
        Sums.push(this.state.PlayerTwoSixSum);
      }
      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }

      if (
        this.state.PlayerTwoOneSum &&
        this.state.PlayerTwoTwoSum &&
        this.state.PlayerTwoThreeSum &&
        this.state.PlayerTwoFourSum &&
        this.state.PlayerTwoFiveSum &&
        this.state.PlayerTwoSixSum
      )
        this.setState({ PlayerTwoBonusSum: DiceSum });
    } else if (player === 3) {
      if (
        this.state.PlayerThreeOneSum &&
        this.state.PlayerThreeOneSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeOneSum);
      }
      if (
        this.state.PlayerThreeTwoSum &&
        this.state.PlayerThreeTwoSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeTwoSum);
      }
      if (
        this.state.PlayerThreeThreeSum &&
        this.state.PlayerThreeThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeThreeSum);
      }
      if (
        this.state.PlayerThreeFourSum &&
        this.state.PlayerThreeFourSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFourSum);
      }
      if (
        this.state.PlayerThreeFiveSum &&
        this.state.PlayeThreeFiveSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFiveSum);
      }
      if (
        this.state.PlayerThreeSixSum &&
        this.state.PlayerThreeSixSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeSixSum);
      }

      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }

      if (
        this.state.PlayerOneOneSum &&
        this.state.PlayerOneTwoSum &&
        this.state.PlayerOneThreeSum &&
        this.state.PlayerOneFourSum &&
        this.state.PlayerOneFiveSum &&
        this.state.PlayerOneSixSum
      )
        this.setState({ PlayerThreeBonusSum: DiceSum });
    } else if (player === 4) {
      if (this.state.PlayerFourOneSum && this.state.PlayerFourOneSum !== "-") {
        Sums.push(this.state.PlayerFourOneSum);
      }
      if (this.state.PlayerFourTwoSum && this.state.PlayerFourTwoSum !== "-") {
        Sums.push(this.state.PlayerFourTwoSum);
      }
      if (
        this.state.PlayerFourThreeSum &&
        this.state.PlayerFourThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourThreeSum);
      }
      if (
        this.state.PlayerFourFourSum &&
        this.state.PlayerFourFourSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFourSum);
      }
      if (
        this.state.PlayerFourFiveSum &&
        this.state.PlayerFourFiveSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFiveSum);
      }
      if (this.state.PlayerFourSixSum && this.state.PlayerFourSixSum !== "-") {
        Sums.push(this.state.PlayerFourSixSum);
      }
      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }

      if (
        this.state.PlayerOneOneSum &&
        this.state.PlayerOneTwoSum &&
        this.state.PlayerOneThreeSum &&
        this.state.PlayerOneFourSum &&
        this.state.PlayerOneFiveSum &&
        this.state.PlayerOneSixSum
      )
        this.setState({ PlayerFourBonusSum: DiceSum });
    }
  };

  bonusSumHandler = (player) => {
    const bonus = 50;
    let bonusSum = 0;

    if (player === 1) {
      if (this.state.SuperYatzy) {
        if (this.state.PlayerOneBonusSum >= 84) {
          bonusSum = this.state.PlayerOneBonusSum + bonus;
          this.setState({ PlayerOneBonusRes: bonusSum });
        } else if (this.state.PlayerOneBonusSum) {
          this.setState({ PlayerOneBonusRes: "-" });
        }
      } else {
        if (this.state.PlayerOneBonusSum >= 63) {
          bonusSum = this.state.PlayerOneBonusSum + bonus;
          this.setState({ PlayerOneBonusRes: bonusSum });
        } else if (this.state.PlayerOneBonusSum) {
          this.setState({ PlayerOneBonusRes: "-" });
        }
      }
    } else if (player === 2) {
      if (this.state.SuperYatzy) {
        if (this.state.PlayerTwoBonusSum >= 84) {
          bonusSum = this.state.PlayerTwoBonusSum + bonus;
          this.setState({ PlayerTwoBonusRes: bonusSum });
        } else if (this.state.PlayerTwoBonusSum) {
          this.setState({ PlayerTwoBonusRes: "-" });
        }
      } else {
        if (this.state.PlayerTwoBonusSum >= 63) {
          bonusSum = this.state.PlayerTwoBonusSum + bonus;
          this.setState({ PlayerTwoBonusRes: bonusSum });
        } else if (this.state.PlayerTwoBonusSum) {
          this.setState({ PlayerTwoBonusRes: "-" });
        }
      }
    } else if (player === 3) {
      if (this.state.SuperYatzy) {
        if (this.state.PlayerThreeBonusSum >= 84) {
          bonusSum = this.state.PlayerThreeBonusSum + bonus;
          this.setState({ PlayerThreeBonusRes: bonusSum });
        } else if (this.state.PlayerThreeBonusSum) {
          this.setState({ PlayerThreeBonusRes: "-" });
        }
      } else {
        if (this.state.PlayerThreeBonusSum >= 63) {
          bonusSum = this.state.PlayerThreeBonusSum + bonus;
          this.setState({ PlayerThreeBonusRes: bonusSum });
        } else if (this.state.PlayerThreeBonusSum) {
          this.setState({ PlayerThreeBonusRes: "-" });
        }
      }
    } else if (player === 4) {
      if (this.state.SuperYatzy) {
        if (this.state.PlayerFourBonusSum >= 84) {
          bonusSum = this.state.PlayerFourBonusSum + bonus;
          this.setState({ PlayerFourBonusRes: bonusSum });
        } else if (this.state.PlayerFourBonusSum) {
          this.setState({ PlayerFourBonusRes: "-" });
        }
      } else {
        if (this.state.PlayerFourBonusSum >= 63) {
          bonusSum = this.state.PlayerFourBonusSum + bonus;
          this.setState({ PlayerFourBonusRes: bonusSum });
        } else if (this.state.PlayerFourBonusSum) {
          this.setState({ PlayerFourBonusRes: "-" });
        }
      }
    }
  };

  pairHandler = (player) => {
    const dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = 0;
      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j] && dice[i] * 2 > DiceSum) {
            DiceSum = dice[i] * 2;
          }
        }
      }
    }

    if (player === 1) {
      this.setState({ PlayerOnePairSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoPairSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreePairSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourPairSum: DiceSum });
    }
  };

  twoPairsHandler = (player) => {
    const dice = [...this.state.SavedDice];

    let pairSum1 = 0;
    let pairSum2 = 0;
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0)) {
      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j] && dice[i] * 2 > pairSum1) {
            pairSum1 = dice[i] * 2;
          }
        }
      }

      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j] && dice[i] * 2 < pairSum1) {
            pairSum2 = dice[i] * 2;
          }
        }
      }

      if (pairSum1 > 0 && pairSum2 > 0) {
        DiceSum = pairSum1 + pairSum2;
      }
    }

    if (player === 1) {
      this.setState({ PlayerOneTwoPairSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoTwoPairSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeTwoPairSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourTwoPairSum: DiceSum });
    }
  };

  threeOfAKindHandler = (player) => {
    const dice = [...this.state.SavedDice];
    let counter = 1;
    let threeKindsSum = this.eraserAndCross(player);

    if (!(threeKindsSum === "-" || threeKindsSum === 0)) {
      threeKindsSum = 0;
      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j]) {
            counter++;
          }
          if (counter === 3 && dice[i] * 3 > threeKindsSum) {
            threeKindsSum = dice[i] * 3;
          }
        }
        counter = 1;
      }
    }

    if (player === 1) {
      this.setState({ PlayerOneThreeOfAKindSum: threeKindsSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoThreeOfAKindSum: threeKindsSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeThreeOfAKindSum: threeKindsSum });
    } else if (player === 4) {
      this.setState({ PlayerFourThreeOfAKindSum: threeKindsSum });
    }
  };

  fourOfAKindHandler = (player) => {
    const dice = [...this.state.SavedDice];
    let counter = 1;
    let fourKindsSum = this.eraserAndCross(player);

    if (!(fourKindsSum === "-" || fourKindsSum === 0)) {
      fourKindsSum = 0;
      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j]) {
            counter++;
          }

          if (counter === 4 && dice[i] * 4 > fourKindsSum) {
            fourKindsSum = dice[i] * 4;
          }
        }
        counter = 1;
      }
    }

    if (player === 1) {
      this.setState({ PlayerOneFourOfAKindSum: fourKindsSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoFourOfAKindSum: fourKindsSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeFourOfAKindSum: fourKindsSum });
    } else if (player === 4) {
      this.setState({ PlayerFourFourOfAKindSum: fourKindsSum });
    }
  };

  smallStraightHandler = (player) => {
    const dice = [...this.state.SavedDice];
    let one = null;
    let two = null;
    let three = null;
    let four = null;
    let five = null;
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0)) {
      one = dice.find((el) => el === 1);
      two = dice.find((el) => el === 2);
      three = dice.find((el) => el === 3);
      four = dice.find((el) => el === 4);
      five = dice.find((el) => el === 5);

      DiceSum = one + two + three + four + five;
    }

    if (DiceSum || DiceSum === 0) {
      if (player === 1) {
        this.setState({ PlayerOneSmallStraightSum: DiceSum });
      } else if (player === 2) {
        this.setState({ PlayerTwoSmallStraightSum: DiceSum });
      } else if (player === 3) {
        this.setState({ PlayerThreeSmallStraightSum: DiceSum });
      } else if (player === 4) {
        this.setState({ PlayerFourSmallStraightSum: DiceSum });
      }
    }
  };

  bigStraightHandler = (player) => {
    const dice = [...this.state.SavedDice];

    let two = null;
    let three = null;
    let four = null;
    let five = null;
    let six = null;
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0)) {
      two = dice.find((el) => el === 2);
      three = dice.find((el) => el === 3);
      four = dice.find((el) => el === 4);
      five = dice.find((el) => el === 5);
      six = dice.find((el) => el === 6);

      DiceSum = two + three + four + five + six;
    }

    if (DiceSum || DiceSum === 0) {
      if (player === 1) {
        this.setState({ PlayerOneBigStraightSum: DiceSum });
      } else if (player === 2) {
        this.setState({ PlayerTwoBigStraightSum: DiceSum });
      } else if (player === 3) {
        this.setState({ PlayerThreeBigStraightSum: DiceSum });
      } else if (player === 4) {
        this.setState({ PlayerFourBigStraightSum: DiceSum });
      }
    }
  };

  fullHouseHandler = (player) => {
    const dice = [...this.state.SavedDice];

    let counterThree = 1;
    let threeKindsSum = 0;
    let counterTwo = 1;
    let twoKindsSum = 0;
    let fullHouseSum = this.eraserAndCross(player);

    if (!(fullHouseSum === "-" || fullHouseSum === 0)) {
      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j]) {
            counterThree++;
          }
          if (counterThree === 3 && dice[i] * 3 > threeKindsSum) {
            threeKindsSum = dice[i] * 3;
          }
        }
        counterThree = 1;
      }

      for (let i = 0; i < dice.length - 1; i++) {
        for (let j = i + 1; j < dice.length; j++) {
          if (dice[i] === dice[j] && dice[i] !== threeKindsSum / 3) {
            counterTwo++;
          }
          if (counterTwo === 2 && dice[i] * 2 > twoKindsSum) {
            twoKindsSum = dice[i] * 2;
          }
        }
        counterTwo = 1;
      }

      if (threeKindsSum && twoKindsSum) {
        fullHouseSum = threeKindsSum + twoKindsSum;
      }
    }

    if (player === 1) {
      this.setState({ PlayerOneFullHouseSum: fullHouseSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoFullHouseSum: fullHouseSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeFullHouseSum: fullHouseSum });
    } else if (player === 4) {
      this.setState({ PlayerFourFullHouseSum: fullHouseSum });
    }
  };

  chanceHandler = (player) => {
    const dice = [...this.state.SavedDice];
    const dice2 = [...this.state.DiceValue];
    let Dice = 0;
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0) && dice2.length > 0) {
      Dice = dice2.reduce((sum, el) => {
        return sum + el;
      });
    }

    if (!(DiceSum === "-" || DiceSum === 0) && dice.length > 0) {
      DiceSum = dice.reduce((sum, el) => {
        return sum + el;
      });
    }

    if (Dice > 0) {
      DiceSum = DiceSum + Dice;
    }

    if (player === 1) {
      this.setState({ PlayerOneChanceSum: DiceSum });
    } else if (player === 2) {
      this.setState({ PlayerTwoChanceSum: DiceSum });
    } else if (player === 3) {
      this.setState({ PlayerThreeChanceSum: DiceSum });
    } else if (player === 4) {
      this.setState({ PlayerFourChanceSum: DiceSum });
    }
  };

  yatzeeHandler = (player) => {
    const dice = [...this.state.SavedDice];
    let DiceSum = this.eraserAndCross(player);

    if (!(DiceSum === "-" || DiceSum === 0)) {
      DiceSum = dice.reduce((sum, el) => {
        return sum + el;
      });

      console.log(DiceSum);

      const yatzeSum = DiceSum + 50;

      if (this.state.SuperYatzy) {
        if (DiceSum === dice[0] * 6) {
          if (player === 1) {
            this.setState({ PlayerOneYatzeSum: yatzeSum });
          } else if (player === 2) {
            this.setState({ PlayerTwoYatzeSum: yatzeSum });
          } else if (player === 3) {
            this.setState({ PlayerThreeYatzeSum: yatzeSum });
          } else if (player === 4) {
            this.setState({ PlayerFourYatzeSum: yatzeSum });
          }
        }
      } else {
        if (DiceSum === dice[0] * 5) {
          if (player === 1) {
            this.setState({ PlayerOneYatzeSum: yatzeSum });
          } else if (player === 2) {
            this.setState({ PlayerTwoYatzeSum: yatzeSum });
          } else if (player === 3) {
            this.setState({ PlayerThreeYatzeSum: yatzeSum });
          } else if (player === 4) {
            this.setState({ PlayerFourYatzeSum: yatzeSum });
          }
        }
      }
    } else {
      if (player === 1) {
        this.setState({ PlayerOneYatzeSum: DiceSum });
      } else if (player === 2) {
        this.setState({ PlayerTwoYatzeSum: DiceSum });
      } else if (player === 3) {
        this.setState({ PlayerThreeYatzeSum: DiceSum });
      } else if (player === 4) {
        this.setState({ PlayerFourYatzeSum: DiceSum });
      }
    }
  };

  totalScoreHandler = (player) => {
    let DiceSum = this.eraserAndCross(player);
    let Sums = [];

    if (player === 1) {
      if (this.state.PlayerOneOneSum && this.state.PlayerOneOneSum !== "-") {
        Sums.push(this.state.PlayerOneOneSum);
      }
      if (this.state.PlayerOneTwoSum && this.state.PlayerOneTwoSum !== "-") {
        Sums.push(this.state.PlayerOneTwoSum);
      }
      if (
        this.state.PlayerOneThreeSum &&
        this.state.PlayerOneThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneThreeSum);
      }
      if (this.state.PlayerOneFourSum && this.state.PlayerOneFourSum !== "-") {
        Sums.push(this.state.PlayerOneFourSum);
      }
      if (this.state.PlayerOneFiveSum && this.state.PlayerOneFiveSum !== "-") {
        Sums.push(this.state.PlayerOneFiveSum);
      }
      if (this.state.PlayerOneSixSum && this.state.PlayerOneSixSum !== "-") {
        Sums.push(this.state.PlayerOneSixSum);
      }
      if (
        this.state.PlayerOneBonusRes &&
        this.state.PlayerOneBonusRes !== "-"
      ) {
        Sums.push(this.state.PlayerOneBonusRes);
      } else {
        Sums.push(this.state.PlayerOneBonusSum);
      }
      if (this.state.PlayerOnePairSum && this.state.PlayerOnePairSum !== "-") {
        Sums.push(this.state.PlayerOnePairSum);
      }
      if (
        this.state.PlayerOneTwoPairSum &&
        this.state.PlayerOneTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneTwoPairSum);
      }
      if (
        this.state.PlayerOneTwoPairSum &&
        this.state.PlayerOneTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneTwoPairSum);
      }
      if (
        this.state.PlayerOneThreeOgAKindSum &&
        this.state.PlayerOneThreeOgAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneThreeOgAKindSum);
      }
      if (
        this.state.PlayerOneFourOfAKindSum &&
        this.state.PlayerOneFourOfAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneFourOfAKindSum);
      }
      if (
        this.state.PlayerOneSmallStraightSum &&
        this.state.PlayerOneSmallStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneSmallStraightSum);
      }
      if (
        this.state.PlayerOneBigStraightSum &&
        this.state.PlayerOneBigStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneBigStraightSum);
      }
      if (
        this.state.PlayerOneFullHouseSum &&
        this.state.PlayerOneFullHouseSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneFullHouseSum);
      }
      if (
        this.state.PlayerOneChanceSum &&
        this.state.PlayerOneChanceSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneChanceSum);
      }
      if (
        this.state.PlayerOneYatzeSum &&
        this.state.PlayerOneYatzeSum !== "-"
      ) {
        Sums.push(this.state.PlayerOneYatzeSum);
      }

      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }
      console.log(Sums);
      console.log(DiceSum);
      this.setState({ PlayerOneTotalScoreSum: DiceSum });
    } else if (player === 2) {
      if (this.state.PlayerTwoOneSum && this.state.PlayerTwoOneSum !== "-") {
        Sums.push(this.state.PlayerTwoOneSum);
      }
      if (this.state.PlayerTwoTwoSum && this.state.PlayerTwoTwoSum !== "-") {
        Sums.push(this.state.PlayerTwoTwoSum);
      }
      if (
        this.state.PlayerTwoThreeSum &&
        this.state.PlayerTwoThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoThreeSum);
      }
      if (this.state.PlayerTwoFourSum && this.state.PlayerTwoFourSum !== "-") {
        Sums.push(this.state.PlayerTwoFourSum);
      }
      if (this.state.PlayerTwoFiveSum && this.state.PlayerTwoFiveSum !== "-") {
        Sums.push(this.state.PlayerTwoFiveSum);
      }
      if (this.state.PlayerTwoSixSum && this.state.PlayerTwoSixSum !== "-") {
        Sums.push(this.state.PlayerTwoSixSum);
      }
      if (
        this.state.PlayerTwoBonusRes &&
        this.state.PlayerTwoBonusRes !== "-"
      ) {
        Sums.push(this.state.PlayerTwoBonusRes);
      } else {
        Sums.push(this.state.PlayerTwoBonusSum);
      }
      if (this.state.PlayerTwoPairSum && this.state.PlayerTwoPairSum !== "-") {
        Sums.push(this.state.PlayerTwoPairSum);
      }
      if (
        this.state.PlayerTwoTwoPairSum &&
        this.state.PlayerTwoTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoTwoPairSum);
      }
      if (
        this.state.PlayerTwoTwoPairSum &&
        this.state.PlayerTwoTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoTwoPairSum);
      }
      if (
        this.state.PlayerTwoThreeOgAKindSum &&
        this.state.PlayerTwoThreeOgAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoThreeOgAKindSum);
      }
      if (
        this.state.PlayerTwoFourOfAKindSum &&
        this.state.PlayerTwoFourOfAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoFourOfAKindSum);
      }
      if (
        this.state.PlayerTwoSmallStraightSum &&
        this.state.PlayerTwoSmallStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoSmallStraightSum);
      }
      if (
        this.state.PlayerTwoBigStraightSum &&
        this.state.PlayerTwoBigStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoBigStraightSum);
      }
      if (
        this.state.PlayerTwoFullHouseSum &&
        this.state.PlayerTwoFullHouseSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoFullHouseSum);
      }
      if (
        this.state.PlayerTwoChanceSum &&
        this.state.PlayerTwoChanceSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoChanceSum);
      }
      if (
        this.state.PlayerTwoYatzeSum &&
        this.state.PlayerTwoYatzeSum !== "-"
      ) {
        Sums.push(this.state.PlayerTwoYatzeSum);
      }

      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }
      this.setState({ PlayerTwoTotalScoreSum: DiceSum });
    } else if (player === 3) {
      if (
        this.state.PlayerThreeOneSum &&
        this.state.PlayerThreeOneSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeOneSum);
      }
      if (
        this.state.PlayerThreeTwoSum &&
        this.state.PlayerThreeTwoSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeTwoSum);
      }
      if (
        this.state.PlayerThreeThreeSum &&
        this.state.PlayerThreeThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeThreeSum);
      }
      if (
        this.state.PlayerThreeFourSum &&
        this.state.PlayerThreeFourSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFourSum);
      }
      if (
        this.state.PlayerThreeFiveSum &&
        this.state.PlayeThreeFiveSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFiveSum);
      }
      if (
        this.state.PlayerThreeSixSum &&
        this.state.PlayerThreeSixSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeSixSum);
      }
      if (
        this.state.PlayerThreeBonusRes &&
        this.state.PlayerThreeBonusRes !== "-"
      ) {
        Sums.push(this.state.PlayerThreeBonusRes);
      } else {
        Sums.push(this.state.PlayerThreeBonusSum);
      }
      if (
        this.state.PlayerThreePairSum &&
        this.state.PlayerThreePairSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreePairSum);
      }
      if (
        this.state.PlayerThreeTwoPairSum &&
        this.state.PlayerThreeTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeTwoPairSum);
      }
      if (
        this.state.PlayerThreeTwoPairSum &&
        this.state.PlayerThreeTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeTwoPairSum);
      }
      if (
        this.state.PlayerThreeThreeOgAKindSum &&
        this.state.PlayerThreeThreeOgAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeThreeOgAKindSum);
      }
      if (
        this.state.PlayerThreeFourOfAKindSum &&
        this.state.PlayerThreeFourOfAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFourOfAKindSum);
      }
      if (
        this.state.PlayerThreeSmallStraightSum &&
        this.state.PlayerThreeSmallStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeSmallStraightSum);
      }
      if (
        this.state.PlayerThreeBigStraightSum &&
        this.state.PlayerThreeBigStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeBigStraightSum);
      }
      if (
        this.state.PlayerThreeFullHouseSum &&
        this.state.PlayerThreeFullHouseSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeFullHouseSum);
      }
      if (
        this.state.PlayerThreeChanceSum &&
        this.state.PlayerThreeChanceSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeChanceSum);
      }
      if (
        this.state.PlayerThreeYatzeSum &&
        this.state.PlayerThreeYatzeSum !== "-"
      ) {
        Sums.push(this.state.PlayerThreeYatzeSum);
      }

      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }
      this.setState({ PlayerThreeTotalScoreSum: DiceSum });
    } else if (player === 4) {
      if (this.state.PlayerFourOneSum && this.state.PlayerFourOneSum !== "-") {
        Sums.push(this.state.PlayerFourOneSum);
      }
      if (this.state.PlayerFourTwoSum && this.state.PlayerFourTwoSum !== "-") {
        Sums.push(this.state.PlayerFourTwoSum);
      }
      if (
        this.state.PlayerFourThreeSum &&
        this.state.PlayerFourThreeSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourThreeSum);
      }
      if (
        this.state.PlayerFourFourSum &&
        this.state.PlayerFourFourSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFourSum);
      }
      if (
        this.state.PlayerFourFiveSum &&
        this.state.PlayerFourFiveSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFiveSum);
      }
      if (this.state.PlayerFourSixSum && this.state.PlayerFourSixSum !== "-") {
        Sums.push(this.state.PlayerFourSixSum);
      }
      if (
        this.state.PlayerFourBonusRes &&
        this.state.PlayerFourBonusRes !== "-"
      ) {
        Sums.push(this.state.PlayerFourBonusRes);
      } else {
        Sums.push(this.state.PlayerFourBonusSum);
      }
      if (
        this.state.PlayerFourPairSum &&
        this.state.PlayerFourPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourPairSum);
      }
      if (
        this.state.PlayerFourTwoPairSum &&
        this.state.PlayerFourTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourTwoPairSum);
      }
      if (
        this.state.PlayerFourTwoPairSum &&
        this.state.PlayerFourTwoPairSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourTwoPairSum);
      }
      if (
        this.state.PlayerFourThreeOgAKindSum &&
        this.state.PlayerFourThreeOgAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourThreeOgAKindSum);
      }
      if (
        this.state.PlayerFourFourOfAKindSum &&
        this.state.PlayerFourFourOfAKindSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFourOfAKindSum);
      }
      if (
        this.state.PlayerFourSmallStraightSum &&
        this.state.PlayerFourSmallStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourSmallStraightSum);
      }
      if (
        this.state.PlayerFourBigStraightSum &&
        this.state.PlayerFourBigStraightSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourBigStraightSum);
      }
      if (
        this.state.PlayerFourFullHouseSum &&
        this.state.PlayerFourFullHouseSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourFullHouseSum);
      }
      if (
        this.state.PlayerFourChanceSum &&
        this.state.PlayerFourChanceSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourChanceSum);
      }
      if (
        this.state.PlayerFourYatzeSum &&
        this.state.PlayerFourYatzeSum !== "-"
      ) {
        Sums.push(this.state.PlayerFourYatzeSum);
      }

      if (Sums.length > 0) {
        DiceSum = Sums.reduce((sum, el) => {
          return sum + el;
        });
      }
      this.setState({ PlayerFourTotalScoreSum: DiceSum });
    }
  };

  /* componentDidUpdate(prevProps) {
    let value = [...this.state.DiceValue];
    let superYatzy = false;

    if (this.props.superYatzy !== prevProps.superYatzy) {
      if (this.props.superYatzy) {
        value = [1, 2, 3, 4, 5, 6];
        superYatzy = true;
      } else {
        value = [1, 2, 3, 4, 5];
        superYatzy = false;
      }
      this.setState({
        DiceValue: value,
        SuperYatzy: superYatzy,
        RollCount: 0,
        SavedDice: [],
      });
    }
    if (this.props.darkMode !== prevProps.darkMode) {
      this.setState((prevState) => {
        return { DarkMode: !prevState.DarkMode };
      });
    }
    if (this.props.scoreBoardDrawerOpen !== prevProps.scoreBoardDrawerOpen) {
      this.setState((prevState) => {
        return { ScoreBoardDrawerOpen: !prevState.ScoreBoardDrawerOpen };
      });
    }
  }*/

  render() {
    return (
      <div
        className={
          this.state.DarkMode
            ? `${classes.YatzyGame} ${classes.DarkMode}`
            : classes.YatzyGame
        }
      >
        <DrawerToggle toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer
          sideDrawerOpen={this.state.SideDrawerOpen}
          superYatzyToggle={this.superYatzyToggleHandler}
          classicYatzyToggle={this.classicYatzyToggleHandler}
          toggleSideDrawer={this.toggleSideDrawerHandler}
          toggleDarkMode={this.toggleDarkModeHandler}
        />
        <ScoreBoardToggle
          toggleScoreBoardDrawer={this.toggleScoreBoardDrawerHandler}
          open={this.state.ScoreBoardDrawerOpen}
        />
        <ScoreBoardDrawer
          crossTool={this.crossToolHandler}
          crossToolSelected={this.state.CrossTool}
          eraserTool={this.eraserToolHandler}
          eraserToolSelected={this.state.EraserTool}
          superYatzy={this.state.SuperYatzy}
          scoreBoardDrawerOpen={this.state.ScoreBoardDrawerOpen}
          toggleScoreBoardDrawer={this.toggleScoreBoardDrawerHandler}
          playerDropDownOpen={this.state.PlayerDropDownOpen}
          togglePlayerDropDown={this.togglePlayerDropDownHandler}
          numOfPlayers={this.state.NumberOfPlayers}
          twoPlayers={this.numOfPlayers2Handler}
          threePlayers={this.numOfPlayers3Handler}
          fourPlayers={this.numOfPlayers4Handler}
          ones={this.onesHandler}
          twos={this.twosHandler}
          threes={this.threesHandler}
          fours={this.foursHandler}
          fives={this.fivesHandler}
          sixes={this.sixesHandler}
          bonus={this.bonusHandler}
          bonusSumHandler={this.bonusSumHandler}
          pair={this.pairHandler}
          twoPairs={this.twoPairsHandler}
          threeOfAKind={this.threeOfAKindHandler}
          fourOfAKind={this.fourOfAKindHandler}
          smallStraight={this.smallStraightHandler}
          bigStraight={this.bigStraightHandler}
          fullHouse={this.fullHouseHandler}
          chance={this.chanceHandler}
          yatze={this.yatzeeHandler}
          totalScore={this.totalScoreHandler}
          onesSum={this.state.OnesSum}
          playerOneOneSum={this.state.PlayerOneOneSum}
          playerOneTwoSum={this.state.PlayerOneTwoSum}
          playerOneThreeSum={this.state.PlayerOneThreeSum}
          playerOneFourSum={this.state.PlayerOneFourSum}
          playerOneFiveSum={this.state.PlayerOneFiveSum}
          playerOneSixSum={this.state.PlayerOneSixSum}
          playerOneBonusSum={this.state.PlayerOneBonusSum}
          playerOneBonusRes={this.state.PlayerOneBonusRes}
          playerOnePairSum={this.state.PlayerOnePairSum}
          playerOneTwoPairSum={this.state.PlayerOneTwoPairSum}
          playerOneThreeOfAKindSum={this.state.PlayerOneThreeOfAKindSum}
          playerOneFourOfAKindSum={this.state.PlayerOneFourOfAKindSum}
          playerOneSmallStraightSum={this.state.PlayerOneSmallStraightSum}
          playerOneBigStraightSum={this.state.PlayerOneBigStraightSum}
          playerOneFullHouseSum={this.state.PlayerOneFullHouseSum}
          playerOneChanceSum={this.state.PlayerOneChanceSum}
          playerOneYatzeSum={this.state.PlayerOneYatzeSum}
          playerOneTotalScoreSum={this.state.PlayerOneTotalScoreSum}
          playerTwoOneSum={this.state.PlayerTwoOneSum}
          playerTwoTwoSum={this.state.PlayerTwoTwoSum}
          playerTwoThreeSum={this.state.PlayerTwoThreeSum}
          playerTwoFourSum={this.state.PlayerTwoFourSum}
          playerTwoFiveSum={this.state.PlayerTwoFiveSum}
          playerTwoSixSum={this.state.PlayerTwoSixSum}
          playerTwoBonusSum={this.state.PlayerTwoBonusSum}
          playerTwoBonusRes={this.state.PlayerTwoBonusRes}
          playerTwoPairSum={this.state.PlayerTwoPairSum}
          playerTwoTwoPairSum={this.state.PlayerTwoTwoPairSum}
          playerTwoThreeOfAKindSum={this.state.PlayerTwoThreeOfAKindSum}
          playerTwoFourOfAKindSum={this.state.PlayerTwoFourOfAKindSum}
          playerTwoSmallStraightSum={this.state.PlayerTwoSmallStraightSum}
          playerTwoBigStraightSum={this.state.PlayerTwoBigStraightSum}
          playerTwoFullHouseSum={this.state.PlayerTwoFullHouseSum}
          playerTwoChanceSum={this.state.PlayerTwoChanceSum}
          playerTwoYatzeSum={this.state.PlayerTwoYatzeSum}
          playerTwoTotalScoreSum={this.state.PlayerTwoTotalScoreSum}
          playerThreeOneSum={this.state.PlayerThreeOneSum}
          playerThreeTwoSum={this.state.PlayerThreeTwoSum}
          playerThreeThreeSum={this.state.PlayerThreeThreeSum}
          playerThreeFourSum={this.state.PlayerThreeFourSum}
          playerThreeFiveSum={this.state.PlayerThreeFiveSum}
          playerThreeSixSum={this.state.PlayerThreeSixSum}
          playerThreeBonusSum={this.state.PlayerThreeBonusSum}
          playerThreeBonusRes={this.state.PlayerThreeBonusRes}
          playerThreePairSum={this.state.PlayerThreePairSum}
          playerThreeTwoPairSum={this.state.PlayerThreeTwoPairSum}
          playerThreeThreeOfAKindSum={this.state.PlayerThreeThreeOfAKindSum}
          playerThreeFourOfAKindSum={this.state.PlayerThreeFourOfAKindSum}
          playerThreeSmallStraightSum={this.state.PlayerThreeSmallStraightSum}
          playerThreeBigStraightSum={this.state.PlayerThreeBigStraightSum}
          playerThreeFullHouseSum={this.state.PlayerThreeFullHouseSum}
          playerThreeChanceSum={this.state.PlayerThreeChanceSum}
          playerThreeYatzeSum={this.state.PlayerThreeYatzeSum}
          playerThreeTotalScoreSum={this.state.PlayerThreeTotalScoreSum}
          playerFourOneSum={this.state.PlayerFourOneSum}
          playerFourTwoSum={this.state.PlayerFourTwoSum}
          playerFourThreeSum={this.state.PlayerFourThreeSum}
          playerFourFourSum={this.state.PlayerFourFourSum}
          playerFourFiveSum={this.state.PlayerFourFiveSum}
          playerFourSixSum={this.state.PlayerFourSixSum}
          playerFourBonusSum={this.state.PlayerFourBonusSum}
          playerFourBonusRes={this.state.PlayerFourBonusRes}
          playerFourPairSum={this.state.PlayerFourPairSum}
          playerFourTwoPairSum={this.state.PlayerFourTwoPairSum}
          playerFourThreeOfAKindSum={this.state.PlayerFourThreeOfAKindSum}
          playerFourFourOfAKindSum={this.state.PlayerFourFourOfAKindSum}
          playerFourSmallStraightSum={this.state.PlayerFourSmallStraightSum}
          playerFourBigStraightSum={this.state.PlayerFourBigStraightSum}
          playerFourFullHouseSum={this.state.PlayerFourFullHouseSum}
          playerFourChanceSum={this.state.PlayerFourChanceSum}
          playerFourYatzeSum={this.state.PlayerFourYatzeSum}
          playerFourTotalScoreSum={this.state.PlayerFourTotalScoreSum}
        />
        <RollDice
          diceValues={this.state.DiceValue}
          rollClicker={this.randomRollHandler}
          removeDie={this.removeDieHandler}
          saveDie={this.saveDieHandler}
          rollCount={this.state.RollCount}
          rolled={this.state.hasRolled}
        />
        <SavedDice
          savedDice={this.state.SavedDice}
          removeDie={this.removeSavedDieHandler}
          returnDie={this.returnDieHandler}
        />
        <DoneButton resetBoard={this.resetBoardHandler} />
      </div>
    );
  }
}

export default YatzyGame;
