import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroVideo: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: -1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  test: {
    position: "absolute",
  },
}));

const Hero = (props) => {
  const classes = useStyles();
  return (
    <video autoPlay muted loop id="hero-video" className={classes.heroVideo}>
      <source src="assets/video/coding-video.mp4" type="video/mp4"></source>
    </video>
  );
};

export default Hero;
