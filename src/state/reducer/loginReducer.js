
const loginReducer = (state="", action) => {
    switch (action.type) {
      case "setPassword":
        return(state = action.payload)
      case "setEmail":
          return (state = action.payload)
      default:
        return state;
    }
  };
  export default loginReducer;