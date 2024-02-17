import React from "react";
import { Box } from "@mui/material";
import HomePage from "../Dashboard/HomePage";
import Sidebar from "../sidebar/Sidebar";
const Dashbord = () => {
  return (
    <>
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <Sidebar />

        <HomePage />
      </Box>
    </>
  );
};
export default Dashbord;
