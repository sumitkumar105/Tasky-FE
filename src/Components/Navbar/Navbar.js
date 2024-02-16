import React, { useState } from "react";
import {
  Typography,
  Stack,
  Container,
  InputBase,
  InputAdornment,
  IconButton,
  TextField,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../Themes/Themes";
import DrawerComponents from "../controls/DrawerComponent";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container
        sx={{
          padding: "10px",
          width: { lg: "100%", xs: "100%" },
          backgroundColor: theme.palette.primary,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <MenuIcon
            sx={{ display: { lg: "none", xs: "block" } }}
            onClick={handleOpenDrawer}
          />
          {open && (
            <DrawerComponents
              open={open}
              setOpen={setOpen}
              handleOpenDrawer={handleOpenDrawer}
            />
          )}
          <Typography variant="h5" color={theme.palette.secondary}>
            Tasky
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Outlined"
            variant="outlined"
            sx={{ display: { lg: "block", xs: "none" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment type="button" position="end">
                  <IconButton>
                    <SearchIcon sx={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Avatar alt="SD" src="/static/images/avatar/1.jpg" />
        </Stack>
      </Container>
    </>
  );
};
export default Navbar;
