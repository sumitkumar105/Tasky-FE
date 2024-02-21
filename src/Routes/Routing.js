import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Homepage from "../Components/Dashboard/HomePage";
import Sidebar from "../Components/sidebar/Sidebar";
import CompletedTask from "../Components/Pages/CompletedTask";
import Navbar from "../Components/Navbar/Navbar";
const Routing = () => {
  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/completedTask" element={<CompletedTask />} />
      </Routes>
    </Box>
  );
};
export default Routing;
