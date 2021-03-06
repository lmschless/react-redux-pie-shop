import { ADD_PIE, BUY_PIE, PIE_FORM } from './../actions/Actions';

export default (state, action) => {
	const { type, data } = action;
	let pieList;
	switch (type) {
		case ADD_PIE:
			pieList = state.initialPieList;
			// returns an array of objects. puts the new pie (DATA) at the front of the array.
			return { ...state, initialPieList: [ data, ...state.initialPieList ] };
		case BUY_PIE:
			// working***
			pieList = state.initialPieList;
			return {
				...state,
				initialPieList: pieList.map(
					(pie) => (pie.id === data.id ? { ...data } : pie)
				)
			};
		case PIE_FORM:
			return { ...state, dynamicForm: data };

		default:
			return state;
	}
};
