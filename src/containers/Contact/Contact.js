import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";

import Aux from "../../hoc/Aux/Aux";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiTextField-root": {
    //   margin: theme.spacing(1),
    //   width: "25ch",
    // },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
  },
  textField: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  email: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    width: "400px",
  },
  messageBox: {
    marginTop: theme.spacing(3),
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  return (
    <Aux>
      <CssBaseLine />
      <Grid container spacing={3} className={classes.container}>
        <Grid item md={12} align="center">
          <Typography align="center" variant="h2" gutterBottom>
            Contact Me
          </Typography>
        </Grid>
        <Grid container spacing={3} className={classes.container}>
          <Grid item md={12}>
            <Typography variant="h5">Enter your contact details</Typography>
          </Grid>
          <Grid item md={12}>
            <FormGroup
              className={classes.formGroup}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="first-name"
                  label="First name"
                  color="secondary"
                  className={classes.textField}
                />
                <TextField
                  required
                  id="last-name"
                  label="Last name"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  required
                  id="email"
                  label="Email address"
                  color="secondary"
                  className={classes.email}
                />
              </div>
              <div>
                <TextField
                  required
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  className={classes.messageBox}
                />
              </div>
            </FormGroup>
          </Grid>
          <Grid item md={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default Contact;
