import React from "react";
import { theme } from "../../Themes/Themes";
import { Typography, Container, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import CardComponent from "../CardComponent";
const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          width: { lg: "80%", xs: "100%" },
          height: { lg: "100vh", xs: "100%" },
          backgroundColor: theme.palette.defualt,
        }}
      >
        <Navbar />
        <CardComponent />
      </Box>
    </>
  );
};
export default HomePage;
