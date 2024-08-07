import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        height: { xs: "200px", md: "300px" }, // Высота изменяется в зависимости от размера экрана
        backgroundColor: "#242424",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", md: "20px" }, // Отступы изменяются в зависимости от размера экрана
      }}
    >
      <Box
        component="img"
        src="/LogoBanner.png"
        alt="Logo Banner"
        sx={{
          width: { xs: "200px", md: "350px" }, // Ширина изменяется в зависимости от размера экрана
          height: { xs: "300px", md: "auto" }, // Высота изменяется в зависимости от размера экрана
          marginBottom: { xs: "10px", md: "20px" }, // Отступ снизу изменяется в зависимости от размера экрана
        }}
      />
    </Box>
  );
};

export default Banner;
