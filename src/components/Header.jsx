import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", overflow: "hidden" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: { xs: "0 10px", md: "0 24px" },
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: 30, md: 40 },
            marginRight: { xs: 1, md: 2 },
          }}
          alt="MainLogo"
          src="./public/logoSF.png"
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
        >
          SoftJet Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
