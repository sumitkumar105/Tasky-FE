import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Container,
  Drawer,
  Divider,
} from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { sidebarData, logoutData } from "../../Constant/SiderbarData";
import { theme } from "../../Themes/Themes";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ListComponent from "./ListComponent";
const DrawerComponents = ({ open, setOpen, handleOpenDrawer }) => {
  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        onClick={handleOpenDrawer}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100vh" }}
        >
          <Box>
            <Container
              sx={{
                width: "100%",
                padding: "20px",
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography>Heading</Typography>
                <ArrowBackIosNewIcon onClick={handleOpenDrawer} />
              </Stack>
            </Container>
            <Divider />
            <ListComponent listData={sidebarData} />
          </Box>
          <Box sx={{ backgroundColor: theme.palette.primary }}>
            <ListComponent listData={logoutData} />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};
export default DrawerComponents;
