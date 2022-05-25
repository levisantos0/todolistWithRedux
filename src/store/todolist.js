import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(
        (item, itemIndex) => itemIndex !== action.payload.indexToRemove
      );
    },
  },
});

export const { addItem, removeItem } = todoListSlice.actions;

export default todoListSlice.reducer;
