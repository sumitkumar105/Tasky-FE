import React from "react";
import { Box, Stack, Container, Divider } from "@mui/material";
import { theme } from "../../Themes/Themes";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { sidebarData, logoutData } from "../../Constant/SiderbarData";
import ListComponent from "../controls/ListComponent";
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        height: "100vh",
        backgroundColor: theme.palette.secondary,
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: {
          lg: "block",
          md: "none",
          xs: "none",
        },
      }}
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
            Heading
          </Container>
          <Divider sx={{ padding: "8px" }} />
          <ListComponent listData={sidebarData} />
        </Box>
        <Box sx={{ backgroundColor: theme.palette.primary }}>
          <ListComponent listData={logoutData} />
        </Box>
      </Stack>
    </Box>
  );
};
export default Sidebar;
