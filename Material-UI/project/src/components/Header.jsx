import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles({
  title: {
    flexGrow: 1, // Ensures the title takes up remaining space
  },
  tagline: {
    fontSize:20,
    justifyContent: "center",
    color: "gray",
    fontStyle: "italic",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Logging Website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <CircleNotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountBoxIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar className={classes.tagline}>
        Express your emotion through words
      </Toolbar>
    </>
  );
};

export default Header;










// import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import { styled } from "@mui/material/styles";

// const Header = () => {
//   return (
//     <>
//       <Toolbar>
//         <IconButton color="inherit">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Logging Website
//         </Typography>

//         <IconButton color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <CircleNotificationsIcon />
//           </Badge>
//         </IconButton>

//         <IconButton color="inherit">
//           <AccountBoxIcon />
//         </IconButton>
//       </Toolbar>

//       <Divider />

//       <Toolbar sx={{ justifyContent: "center", color: "text.secondary", fontStyle: "italic" }}>
//         Express your emotion through words
//       </Toolbar>
//     </>
//   );
// };

// export default Header;

