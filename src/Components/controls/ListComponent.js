import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const ListComponent = ({ listData }) => {
  let navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <List>
        {listData?.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            onClick={() => handleNavigate(text?.path)}
          >
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
