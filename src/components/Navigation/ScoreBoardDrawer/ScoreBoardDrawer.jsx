import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./ScoreBoardDrawer.module.css";
import PlayerCount from "./PlayerCount/PlayerCount";
import ScoreBoards from "./ScoreBoards/ScoreBoards";
import CrossTool from "./CrossTool/CrossTool";
import EraserTool from "./EraserTool/EraserTool";
import PlayerDropDown from "./PlayerDropDown/PlayerDropDown";

const scoreBoardDrawer = (props) => {
  let attachedClasses = [classes.ScoreBoardDrawer, classes.Close];
  if (props.scoreBoardDrawerOpen) {
    attachedClasses = [classes.ScoreBoardDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop
        drawerOpen={props.scoreBoardDrawerOpen}
        toggle={props.toggleScoreBoardDrawer}
      />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Layout}>
          <PlayerDropDown
            numOfPlayers={props.numOfPlayers}
            playerDropDownOpen={props.playerDropDownOpen}
            togglePlayerDropDown={props.togglePlayerDropDown}
            twoPlayers={props.twoPlayers}
            threePlayers={props.threePlayers}
            fourPlayers={props.fourPlayers}
          />

          <div className={classes.BackArrow}>
            <i
              className="las la-angle-right"
              onClick={props.toggleScoreBoardDrawer}
            ></i>
          </div>
        </div>
        <div className={classes.Tools}>
          <CrossTool
            crossTool={props.crossTool}
            crossToolSelected={props.crossToolSelected}
          />
          <EraserTool
            eraserTool={props.eraserTool}
            eraserToolSelected={props.eraserToolSelected}
          />
        </div>

        <ScoreBoards
          superYatzy={props.superYatzy}
          numOfPlayers={props.numOfPlayers}
          ones={props.ones}
          twos={props.twos}
          threes={props.threes}
          fours={props.fours}
          fives={props.fives}
          sixes={props.sixes}
          bonus={props.bonus}
          bonusSumHandler={props.bonusSumHandler}
          pair={props.pair}
          twoPairs={props.twoPairs}
          threeOfAKind={props.threeOfAKind}
          fourOfAKind={props.fourOfAKind}
          smallStraight={props.smallStraight}
          bigStraight={props.bigStraight}
          fullHouse={props.fullHouse}
          chance={props.chance}
          yatze={props.yatze}
          totalScore={props.totalScore}
          onesSum={props.onesSum}
          playerOneOneSum={props.playerOneOneSum}
          playerOneTwoSum={props.playerOneTwoSum}
          playerOneThreeSum={props.playerOneThreeSum}
          playerOneFourSum={props.playerOneFourSum}
          playerOneFiveSum={props.playerOneFiveSum}
          playerOneSixSum={props.playerOneSixSum}
          playerOneBonusSum={props.playerOneBonusSum}
          playerOneBonusRes={props.playerOneBonusRes}
          playerOnePairSum={props.playerOnePairSum}
          playerOneTwoPairSum={props.playerOneTwoPairSum}
          playerOneThreeOfAKindSum={props.playerOneThreeOfAKindSum}
          playerOneFourOfAKindSum={props.playerOneFourOfAKindSum}
          playerOneSmallStraightSum={props.playerOneSmallStraightSum}
          playerOneBigStraightSum={props.playerOneBigStraightSum}
          playerOneFullHouseSum={props.playerOneFullHouseSum}
          playerOneChanceSum={props.playerOneChanceSum}
          playerOneYatzeSum={props.playerOneYatzeSum}
          playerOneTotalScoreSum={props.playerOneTotalScoreSum}
          playerTwoOneSum={props.playerTwoOneSum}
          playerTwoTwoSum={props.playerTwoTwoSum}
          playerTwoThreeSum={props.playerTwoThreeSum}
          playerTwoFourSum={props.playerTwoFourSum}
          playerTwoFiveSum={props.playerTwoFiveSum}
          playerTwoSixSum={props.playerTwoSixSum}
          playerTwoBonusSum={props.playerTwoBonusSum}
          playerTwoBonusRes={props.playerTwoBonusRes}
          playerTwoPairSum={props.playerTwoPairSum}
          playerTwoTwoPairSum={props.playerTwoTwoPairSum}
          playerTwoThreeOfAKindSum={props.playerTwoThreeOfAKindSum}
          playerTwoFourOfAKindSum={props.playerTwoFourOfAKindSum}
          playerTwoSmallStraightSum={props.playerTwoSmallStraightSum}
          playerTwoBigStraightSum={props.playerTwoBigStraightSum}
          playerTwoFullHouseSum={props.playerTwoFullHouseSum}
          playerTwoChanceSum={props.playerTwoChanceSum}
          playerTwoYatzeSum={props.playerTwoYatzeSum}
          playerTwoTotalScoreSum={props.playerTwoTotalScoreSum}
          playerThreeOneSum={props.playerThreeOneSum}
          playerThreeTwoSum={props.playerThreeTwoSum}
          playerThreeThreeSum={props.playerThreeThreeSum}
          playerThreeFourSum={props.playerThreeFourSum}
          playerThreeFiveSum={props.playerThreeFiveSum}
          playerThreeSixSum={props.playerThreeSixSum}
          playerThreeBonusSum={props.playerThreeBonusSum}
          playerThreeBonusRes={props.playerThreeBonusRes}
          playerThreePairSum={props.playerThreePairSum}
          playerThreeTwoPairSum={props.playerThreeTwoPairSum}
          playerThreeThreeOfAKindSum={props.playerThreeThreeOfAKindSum}
          playerThreeFourOfAKindSum={props.playerThreeFourOfAKindSum}
          playerThreeSmallStraightSum={props.playerThreeSmallStraightSum}
          playerThreeBigStraightSum={props.playerThreeBigStraightSum}
          playerThreeFullHouseSum={props.playerThreeFullHouseSum}
          playerThreeChanceSum={props.playerThreeChanceSum}
          playerThreeYatzeSum={props.playerThreeYatzeSum}
          playerThreeTotalScoreSum={props.playerThreeTotalScoreSum}
          playerFourOneSum={props.playerFourOneSum}
          playerFourTwoSum={props.playerFourTwoSum}
          playerFourThreeSum={props.playerFourThreeSum}
          playerFourFourSum={props.playerFourFourSum}
          playerFourFiveSum={props.playerFourFiveSum}
          playerFourSixSum={props.playerFourSixSum}
          playerFourBonusSum={props.playerFourBonusSum}
          playerFourBonusRes={props.playerFourBonusRes}
          playerFourPairSum={props.playerFourPairSum}
          playerFourTwoPairSum={props.playerFourTwoPairSum}
          playerFourThreeOfAKindSum={props.playerFourThreeOfAKindSum}
          playerFourFourOfAKindSum={props.playerFourFourOfAKindSum}
          playerFourSmallStraightSum={props.playerFourSmallStraightSum}
          playerFourBigStraightSum={props.playerFourBigStraightSum}
          playerFourFullHouseSum={props.playerFourFullHouseSum}
          playerFourChanceSum={props.playerFourChanceSum}
          playerFourYatzeSum={props.playerFourYatzeSum}
          playerFourTotalScoreSum={props.playerFourTotalScoreSum}
          
        />
      </div>
    </>
  );
};

export default scoreBoardDrawer;
