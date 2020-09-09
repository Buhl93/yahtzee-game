import React from "react";
import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => {
  return (
    <div onClick={props.toggleSideDrawer} className={classes.ToggleButton}>
      <i class="las la-cog"></i>
    </div>
  );
};

export default drawerToggle;
