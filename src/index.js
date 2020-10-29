import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);
