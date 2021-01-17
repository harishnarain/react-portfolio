import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    card: {
        position: "relative",
        width: "45%",
        height: 200,
        margin: theme.spacing(2),
    },
    cardActions: {
        position: "relative",
        display: 'flex',
        justifyContent: "center",
    },
    cardContent: {
        position: "relative",
        textAlign: "center",
        backgroundColor: "black",
        height: 100,
    },
    cardMedia: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%",
        opacity: 0.75
    },
}));

const ProjectCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                media="picture"
                alt={props.imgAlt}
                image={props.imgSrc}
                title={props.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Link href={props.githubUrl}>
                    <Button size="small" color="primary" variant="contained">Visit GitHub Page</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;