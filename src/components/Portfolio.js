import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
/*

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
*/
import booking from "../images/booking.jpg"
import shopping from "../images/shopping.jpg"
import bookshelf from "../images/bookshelf.jpg"
import chatting from "../images/chatting.jpg"
import crypto from "../images/crypto.jpg"

import stocks from "../images/stocks.jpg"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#blue",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Booking App",
    description: `Built an event booking app, where the user had to book an event based on the availability
    , the availability could be checked on the calender grid. After making an entry, that particular spot would now be marked
    It was created using React and worked on a JSON server`,
    image:booking,
    
    
  },
  {
    name: "Ecommerce",
    description: `Built a MERN stack ecommerce app, called sneakerFreaker. It had all the features like
    a shopping cart, billing etc. The billing is integratted with the RazorPay API`,
    image:shopping,
    
    
  },
  {
    name: "Bookshelf App",
    description: `Created a react bookshelf app, where the user could browse through the repository of books, add them to the reading phase,
    during that phase, he can make notes and later on once it has been added to the finished phase, he could rate them and write a summary.`,
    image:bookshelf,
    
    
  },
  {
    name: "Chatting App",
    description: `Created a chatting App using stream. THe user could create groups, send in emojis, attach documents`,
    image:chatting,
    

    
  },
  {
    name: "Crypto currency tracker",
    description: `Created a crypto currency tracker app where the user could track the prices of the crypto currencies`,
    image:crypto,
    
   
  },
  {
    name: "Stock trading",
    description: `A backend  boilerplate in express, where the user can trade stocks with virtual money`,
    image:stocks,
    
    
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
