const initialState = {
	allWages: [],
	allEmployees: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
			};
		case "GET_EMPLOYEES":
			return {
				...state,
				allEmployees: action.payload,
			};

		case "GET_WAGES":
			return {
				...state,
				allWages: action.payload,
			};

		default:
			return { ...state };
	}
};

export default reducer;
