const initialState = {
  togglebutton:true
};

const TodoList = (state = initialState, action) => {
  switch (action.type) {
     case "toggle":
    return (state = {togglebutton:action.payload.tooglebutton}  );
    // case "DELETE": {
    //   let deletedata = state.actualdata.filter((item) => {
    //     return item.id != action.id;
    //   });
    //   return (state = { actualdata: deletedata });
    // }
    // case "EDIT": {
    //   const geteditid = state.actualdata.findIndex((item) => {
    //     return item.id == action.data.id;
    //   });
    //   alert("edit value id" + geteditid);
    //   let duplicatearray = [...state.actualdata];
    //   duplicatearray[geteditid] = action.data;
    //   return (state = { actualdata: duplicatearray });
    // }

    default:
      return state;
  }
};

export default TodoList;
