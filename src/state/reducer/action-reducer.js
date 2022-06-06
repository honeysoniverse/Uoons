// const initialState = {
//   togglebutton:true
// };

// const TodoList = (state = initialState, action) => {
//   switch (action.type) {
//      case "+":
//     return (state = {togglebutton:action.payload.}  );
   

//     default:
//       return state;
//   }
// };

// export default TodoList;
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return (state = state + action.payload);

    case "withdraw":
      return (state = state - action.payload);
    default:
      return state;
  }
};
export default reducer;