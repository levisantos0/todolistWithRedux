import React, { useState } from "react";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/todolist";

const ListWithRedux = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todolist.list);
  const [text, setText] = useState("");

  const addItemToList = () => {
    if (text) {
      dispatch(addItem(text));
    }
  };

  const removeItemFromList = (indexToRemove) => {
    dispatch(removeItem({ indexToRemove }));
  };

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignContent: "center",
        padding: 10,
        width: "50vw",
        border: "3px solid black",
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2 }}
        variant="h6"
        component="div"
        style={{ textAlign: "center" }}
      >
        To do List
      </Typography>
      <TextField
        onChange={(e) => setText(e.target.value)}
        id="standard-basic"
        label="Item"
        variant="outlined"
        inputProps={{
          maxLength: 100,
        }}
      />
      <Button onClick={addItemToList}>add</Button>
      <List dense={true}>
        {list.map((item, index) => (
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeItemFromList(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox />
            <ListItemText style={{ wordBreak: "break-word" }} primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default ListWithRedux;
