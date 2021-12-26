import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const user = null; //will have object when logged in, or not not logged in
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="center"
        >
          Memories
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {
            //will have the logic, if user is logged in, show profile logic, otherwise dont show profile
            user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.ImageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button className={classes.logout} variant="contained" color="secondary" >Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
