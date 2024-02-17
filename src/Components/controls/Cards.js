import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
const Cards = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip label="LOW" color="info" />
            <MoreVertIcon />
          </Stack>
          <Typography variant="h6" gutterBottom>
            Title 1
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Sumitkumar Sanjay Deshpande working on teh task number 10 which nned
            to work on priority
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              sx={{
                width: "30%",
                padding: "5px",
                backgroundColor: "grey",
                textAlign: "center",
                color: "white",
              }}
            >
              3,fec
            </Box>

            <Avatar src="/static/images/avatar/1.jpg" />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default Cards;
