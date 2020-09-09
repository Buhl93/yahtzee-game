import React, { Component } from "react";
import DrawerToggle from "../../components/Navigation/SideDrawer/SideDrawerToggle/DrawerToggle";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import YatzyGame from "../../containers/YatzyGame/YatzyGame";

/* import classes from "./Layout.module.css"; */

class Layout extends Component {
  render() {
    return <YatzyGame />;
  }
}

export default Layout;
