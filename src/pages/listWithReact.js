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
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const ListWithReact = () => {
  const [lista, setLista] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text) {
      setLista([...lista, text]);
    }
  };

  const deleteItem = (index) => {
    const filtredList = lista.filter((item, itemIndex) => itemIndex !== index);
    setLista(filtredList);
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
      <Button onClick={addItem}>add</Button>
      <List dense={true}>
        {lista.map((item, index) => (
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText style={{ wordBreak: "break-word" }} primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default ListWithReact;
