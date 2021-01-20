import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Aux from "../hoc/Aux/Aux";

const useStyles = makeStyles((theme) => ({
  root: {
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
      <Typography variant="body2" color="inherit" className={classes.root}>
        © 2021 Harish Narain
      </Typography>
      <Link href="https://twitter.com/harishnarain">
        <TwitterIcon className={classes.link} color="action" />
      </Link>
      <Link href="https://www.linkedin.com/in/harishnarain">
        <LinkedInIcon className={classes.link} color="action" />
      </Link>
      <Link href="https://github.com/harishnarain">
        <GitHubIcon className={classes.link} color="action" />
      </Link>
    </Aux>
  );
};

export default AppBarItems;
