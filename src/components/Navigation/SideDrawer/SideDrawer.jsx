import React from "react";
import classes from "./SideDrawer.module.css";
import GameModes from "./GameModes/GameModes";
import Backdrop from "../../UI/Backdrop/Backdrop";
import DarkModeSwitch from './DarkModeSwitch/DarkModeSwitch';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.sideDrawerOpen) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop drawerOpen={props.sideDrawerOpen} toggle={props.toggleSideDrawer}/>
      <div className={attachedClasses.join(" ")}>
        <GameModes
          superYatzyToggle={props.superYatzyToggle}
          classicYatzyToggle={props.classicYatzyToggle}
          toggleSideDrawer={props.toggleSideDrawer}
        />
        <DarkModeSwitch toggleDarkMode={props.toggleDarkMode} />
      </div>
    </>
  );
};

export default sideDrawer;
