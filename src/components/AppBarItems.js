import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import LinkWrapper from "@material-ui/core/Link";

import Aux from "../hoc/Aux/Aux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
  },
}));

const AppBarItems = (props) => {
  const classes = useStyles();

  return (
    <Aux>
      <div className={classes.title}>
        <LinkWrapper component={Link} to="/" color="inherit" variant="h6">
          HN
        </LinkWrapper>
      </div>
      <LinkWrapper
        component={Link}
        to="/"
        color="inherit"
        variant="body1"
        className={classes.link}
      >
        About Me
      </LinkWrapper>
      <LinkWrapper
        component={Link}
        to="/portfolio"
        color="inherit"
        variant="body1"
        className={classes.link}
      >
        Portfolio
      </LinkWrapper>
      <LinkWrapper
        component={Link}
        to="/contact"
        color="inherit"
        variant="body1"
        className={classes.link}
      >
        Contact Me
      </LinkWrapper>
    </Aux>
  );
};

export default AppBarItems;
