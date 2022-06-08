
const loginReducer = (state={email:"",password:""}, action) => {
    switch (action.type) {
      case "setEmail":
        return   state={...state, email:action.payload}
        
        case "setPassword":
        return   state={...state, password:action.payload}
          
          
      default:
        return state;
    }
  };
  export default loginReducer;