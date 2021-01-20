import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import FooterBarItems from "../components/FooterBarItems";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appbar: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
  },
}));

const FooterBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <FooterBarItems />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FooterBar;
