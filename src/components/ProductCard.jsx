import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { md: 350 },
        width: { xs: 410, md: 480 },
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", objectPosition: "center", marginTop: 3 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {product.description}
        </Typography>
        <Box sx={{ marginTop: "auto" }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              color: "white",
              padding: "5px 15px",
              marginTop: 1,
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            {product.price}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
