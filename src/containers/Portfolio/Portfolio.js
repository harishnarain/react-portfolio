import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import Aux from '../../hoc/Aux/Aux';
import ProjectCard from '../../components/ProjectCard';

const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: theme.spacing(6),
    },
    container: {
        display: "flex",
        alignItems: "center"
    }
}));

const Portfolio = props => {
    const classes = useStyles();

    const projects = [
        {
            id: 1,
            title: "Geoverse",
            imgSrc: "assets/images/geoverse.jpeg",
            imgAlt: "screenshot of the Geoverse landing page",
            description: "Geoverse is a modern take on the '90s Geocities. We bring globally diverse communities together",
            githubUrl: "https://github.com/AGr2020Xman/community-hub-project"
        },
        {
            id: 2,
            title: "Pinboard",
            imgSrc: "assets/images/pinboard.gif",
            imgAlt: "pinboard screenshot",
            description: "A dynamic bulletin board for educational institutions",
            githubUrl: "https://github.com/Ninetta11/7-Project-1"
        },
        {
            id: 3,
            title: "HCloud Admin",
            imgSrc: "assets/images/hcloud_admin.png",
            imgAlt: "hcloud-admin useradmin page",
            description: "SaaS admin site with ReactJS, Azure AD, and Azure Functions",
            githubUrl: "https://github.com/harishnarain/hcloud-admin"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            imgSrc: "assets/images/weatherdashboard.png",
            imgAlt: "Weather Dashboard Screenshot",
            description: "A modern weather dashboard",
            githubUrl: "https://github.com/harishnarain/weatherdashboard"
        },
        {
            id: 5,
            title: "Coding Quiz",
            imgSrc: "assets/images/codingquiz.png",
            imgAlt: "Coding Quiz screenshot",
            description: "A coding quiz which offers timed multiple choice questions",
            githubUrl: "https://github.com/harishnarain/codingquiz"
        },
        {
            id: 6,
            title: "HCloud Customers API",
            imgSrc: "assets/images/hcloud_customers_api.png",
            imgAlt: "screenshot of API code and Postman validation",
            description: "API to manage customer records. Uses Azure Functions, MongoDB and JavaScript",
            githubUrl: "https://github.com/harishnarain/hcloud-customers-api"
        },
        {
            id: 7,
            title: "React AAD MSAL",
            imgSrc: "assets/images/react_msal.png",
            imgAlt: "React-AAD MSAL logo",
            description: "Built on the react-aad open source project",
            githubUrl: "https://github.com/harishnarain/react-aad-b2c-demo"
        },
        {
            id: 8,
            title: "The Burger Class",
            imgSrc: "assets/images/burger.png",
            imgAlt: "Burger Class screenshot",
            description: "A project using an MVC framework",
            githubUrl: "https://github.com/harishnarain/burger-class"
        }
    ];

    const projectCards = projects.map(project => {
        return (
            <ProjectCard key={project.id} title={project.title} imgSrc={project.imgSrc} imgAlt={project.imgAlt} description={project.description} githubUrl={project.githubUrl} />
        );
    });

    return (
        <Aux>
            <CssBaseLine />
            <Grid container spacing={3} className={classes.container}>
                <Grid item md={12} align="center">
                    <Typography align="center" variant="h2" gutterBottom>My Work</Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Typography align="center" variant="h5" gutterBottom className={classes.subtitle}>
                    Here is some my recent class projects, single page apps and serverless APIs
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    {projectCards}
                </Grid>
            </Grid>
        </Aux>
    );
};

export default Portfolio;