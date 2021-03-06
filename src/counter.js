import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
  // 위와 동일한 기능
  // if (action.type === PLUS) {
  //   return count + 1;
  // } else if (action.type === MINUS) {
  //   return count - 1;
  // } else {
  //   return count;
  // }
};

const countStore = createStore(countModifier);
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

// 위와 동일한 기능
// plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
// minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
