import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
const ListComponent = ({ listData }) => {
  return (
    <>
      <List>
        {listData?.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text?.icon}</ListItemIcon>
              <ListItemText primary={text?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default ListComponent;
