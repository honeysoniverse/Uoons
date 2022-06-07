const addProductReducer = (state="", action) => {
    switch (action.type) {
  
      case "setCategory":
          return (state = action.payload)  
      case "setSubCategory":
          return (state = action.payload)  
      case "setTitle":
          return (state = action.payload)
      case "setSale":
          return (state = action.payload) 
      case "setOffer":
          return (state = action.payload) 
      case "setMrp":
          return (state = action.payload)
      case "setDescription":
          return (state = action.payload) 
      case "setReturnPolicy":
          return (state = action.payload) 
          case "setAdditionalInfoTitle":
          return (state = action.payload)  
          case "setAdditionalInfoDesc":
          return (state = action.payload)
          case "setSalientFeatures":
            return (state = action.payload)        
      default:
        return state;
    }
  };
  export default addProductReducer;