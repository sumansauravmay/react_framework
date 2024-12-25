import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    title:{
    fontSize:40,
    fontFamily:"Montserrat"
    },
    cover:{
        backgroundImage:`url(https://thumbs.dreamstime.com/b/gentle-nature-background-butterfly-blurred-324410107.jpg)`,
        backgroundPosition:"center",
        padding:"35px 25px"
    }
})


const FeaturedComponent = () => {
const classes=useStyles();


  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>Titleof longer featured blog position</Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis
          maxime dolor suscipit tempora cupiditate quidem placeat neque
          mollitia, nam nihil soluta, ipsum dolore voluptates. Obcaecati
          explicabo laboriosam reiciendis perferendis.
        </Typography>
      </CardContent>

      <CardActions>
        <Button className={classes.btn}>Read More</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedComponent;
