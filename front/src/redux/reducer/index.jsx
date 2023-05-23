const initialState = {
  isLogin: false,
  allEmployees: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      
    case "LOGIN": 
      return {
          ...state, 
          isLogin: true,
      }
    case "GET_EMPLOYEES":
      return {
        ...state,
        allEmployees: action.payload
      }

    default: return {...state};
  }
};

export default reducer;