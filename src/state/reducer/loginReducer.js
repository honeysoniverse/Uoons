
const loginReducer = (state="", action) => {
    switch (action.type) {
      case "setPassword":
        return {
          ...state,
          DataSuccess: action.payload
        }
          
      case "setEmail":
        return {
          ...state,
          DataSuccess: action.payload
        }
      default:
        return state;
    }
  };
  export default loginReducer;