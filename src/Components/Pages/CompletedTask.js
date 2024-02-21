import React from "react";
import { theme } from "../../Themes/Themes";
import { Typography, Container, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const CompletedTask = () => {
  return (
    <>
      <Box
        sx={{
          width: { lg: "80%", xs: "100%" },
          height: { lg: "100vh", xs: "100%" },
          backgroundColor: "cyan",
        }}
      >
        <Navbar />
        <div style={{ textAlign: "center" }}>
          <h1>Completed Task Page</h1>
          <h1>Completed Task Page</h1>
          <h1>Completed Task Page</h1>
          <h1>Completed Task Page</h1>
          <h1>Completed Task Page</h1>
        </div>
      </Box>
    </>
  );
};
export default CompletedTask;
