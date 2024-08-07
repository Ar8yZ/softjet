import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        height: { xs: "200px", md: "300px" },
        backgroundColor: "#242424",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", md: "20px" },
      }}
    >
      <Box
        component="img"
        src="content/LogoBanner.png"
        alt="test123"
        sx={{
          width: { xs: "200px", md: "350px" },
          height: { xs: "300px", md: "auto" },
          marginBottom: { xs: "10px", md: "20px" },
        }}
      />
    </Box>
  );
};

export default Banner;
