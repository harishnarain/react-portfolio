import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'

import Aux from '../../hoc/Aux/Aux';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        display: 'block',
        position: 'absolute'
    },
    subtitle: {
        marginBottom: theme.spacing(3),
    },
    overlayImage: {
       
    },
    imageText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        opacity: '0',
        transition: '0.5s ease',
        backgroundColor: '255, 255, 255, 0.89',
        '&:hover': {
            opacity: '1'
        },
    }
}));

const Portfolio = props => {
    const classes = useStyles();

    return (
        <Aux>
            <CssBaseLine />
            <Grid container spacing={3}>
                <Grid item md={12} align="center">
                    <Typography align="center" variant="h2" gutterBottom>My Work</Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Typography align="center" variant="h5" gutterBottom className={classes.subtitle}>
                    Here is some my recent class projects, single page apps and serverless APIs
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Link href="https://github.com/AGr2020Xman/community-hub-project">
                            <Grid item md={12} className={classes.overlayImage}>
                                <img src="assets/images/geoverse.jpeg" className={classes.image} alt="screenshot of Geoverse landing page" />
                                <div className={classes.imageText}>
                                    <Typography align="center" variant="h6" gutterBottom className={classes.projectTitle}>
                                        Geoverse
                                    </Typography>
                                    <Typography align="center" variant="subtitle1" gutterBottom className={classes.projectDescription}></Typography>
                                    <Button>Visit GitHub Page</Button>
                                </div>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Aux>
    );
};

export default Portfolio;