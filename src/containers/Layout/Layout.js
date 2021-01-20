import React from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Aux from "../../hoc/Aux/Aux";
import NavigationBar from "../../components/NavigationBar";
import FooterBar from "../../components/FooterBar";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0b3954",
    },
    secondary: {
      main: "#087e8b",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    minHeight: "100vh",
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Aux>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseLine />
          <NavigationBar className={classes.toolbar} />
          <Container maxWidth="md" className={classes.container}>
            <div className={classes.topMargin}>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
              </main>
            </div>
          </Container>
          <FooterBar className={classes.footer} />
        </div>
      </ThemeProvider>
    </Aux>
  );
};

export default Layout;
