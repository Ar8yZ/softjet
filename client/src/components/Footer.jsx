import React from "react";
import { Box, Typography, IconButton, Container, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        overflow: "hidden",
      }}
      component="footer"
    >
      <Container maxWidth="lg" sx={{ padding: { xs: "0 10px", md: "0 24px" } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <IconButton color="primary" href="https://facebook.com">
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="https://instagram.com">
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="https://twitter.com">
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © 2024 SoftJet Shop.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          component="p"
        >
          Москва 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
