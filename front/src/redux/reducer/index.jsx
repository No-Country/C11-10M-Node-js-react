const initialState = {
  isLogin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      
    case "LOGIN": 
      return {
          ...state, 
          isLogin: true
      }

    default: return {...state};
  }
};

export default reducer;