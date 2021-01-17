import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DescriptionIcon from '@material-ui/icons/Description';
import Link from '@material-ui/core/Link';

import Aux from '../../hoc/Aux/Aux';

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3)
    },
    card: {
        minWidth: 275,
        marginBottom: theme.spacing(3)
    },
    cardHeading: {
        marginBottom: theme.spacing(2)
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <Aux>
            <CssBaseLine />
            <Grid container spacing={3}>
                <Grid item md={12} align="center">
                    <Typography align='center' variant='h2' gutterBottom>Who's Harish</Typography>
                </Grid>
                <Grid item md={8}>
                    <Paper>
                        <Typography className={classes.content} variant="body1">
                            I'm a full stack developer with an obsession for driving positive change in the world through technology. 
                            While being enthusiastic of the technology behind solutions, I use lean startup principles to ensure user
                            adoption and efficiency is encompassed into the development cycle.
                        </Typography>
                        <Typography className={classes.content} variant="body1">
                            I've been working in technology for over two decades. My experience with cloud computing and infrastructure
                            provide the breadth required to ensure success.
                        </Typography>
                        <Typography className={classes.content} variant="body1">
                            My work experience covers working in the financial sector, and IT consulting. Currently for the last 8 years
                            I've been working for Microsoft working on helping customers deploy cloud solutions.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant='h6' className={classes.cardHeading}>My Resume</Typography>
                            <Link href="https://www.harishnarain.com/assets/pdf/resume.pdf">
                                <DescriptionIcon color="action" />
                                <Typography color="textPrimary">
                                        Download PDF
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                        <Typography variant='h6' className={classes.cardHeading}>Collegue</Typography>
                        <Typography variant='subtitle2'>As a consultant</Typography>
                        <Typography variant='body1'>
                            I had the pleasure of working with Harish directly, and
                            continue to realize the value he brought. Practice-wide
                            delivery quality improved immediately as a result of
                            Harish’s efforts with standardizing the structure and
                            deliverables of our UC engagements. Harish’s legacy of
                            excellence lives on within our community, and he continues
                            to garner praise from his peers. His technical expertise
                            is surpassed only by his commitment to The Client. I
                            proudly recommend Harish.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Aux>
    );
};

export default Home;