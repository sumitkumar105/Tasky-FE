import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { theme } from "../../Themes/Themes";
import FlagIcon from "@mui/icons-material/Flag";

import Cards from "./Cards";
const TaskCard = () => {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "5px" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6" color={theme.palette.default}>
              Pending
            </Typography>
            <FlagIcon sx={{ color: "red" }} />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "18px" }}
          >
            +
          </Button>
        </Stack>
        <Cards />
        <Cards />
      </Stack>
    </>
  );
};
export default TaskCard;
