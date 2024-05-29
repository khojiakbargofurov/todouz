import { createSlice } from "@reduxjs/toolkit";

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("data")) || {
      data: [],
    }
  );
}
const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: dataFromLocalStorage,
  reducers: {
    addTitle: (state, { payload }) => {
      state.data.push(payload);
      localStorage.setItem("data", JSON.stringify(state));
    },
    deletTitle: (state, { payload }) => {
      const filterTodo = state.data.filter((itme) => itme.id !== payload);
      state.data = filterTodo;
      localStorage.setItem("data", JSON.stringify(state));
    },
    ClearCompleted: (state) => {
      state.data = [];
      localStorage.setItem("data", JSON.stringify(state));
    },
    textDecoration: (state, { payload }) => {
      const item = state.data.find((item) => item.id == payload);
      item.Completed = !item.Completed;
      localStorage.setItem("data", JSON.stringify(state));
    },
    ActiveTitle: (state) => {
      state.data.map((item) => {
        item.Completed = false;
      });
      localStorage.setItem("data", JSON.stringify(state));
    },
    textDecorationAll: (state) => {
      state.data.map((item) => {
        item.Completed = true;
      });
      localStorage.setItem("data", JSON.stringify(state));
    },
    incrementByAmount: (state, action) => {},
  },
});

export const {
  addTitle,
  deletTitle,
  ClearCompleted,
  textDecoration,
  incrementByAmount,
  ActiveTitle,
  textDecorationAll,
} = counterSlice.actions;

export default counterSlice.reducer;
