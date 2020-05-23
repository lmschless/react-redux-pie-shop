import { ADD_PIE, BUY_PIE, PIE_FORM } from './../actions/Actions';
import { combineReducers } from 'redux';

export default (state, action) => {
	const { type, data } = action;
	switch (type) {
		case ADD_PIE:
			return {
				...state,
				initialPieList: [ ...state.initialPieList, action.data ]
			};

		// const pieList = state.initialPieList;
		// // returns an array of objects. puts the new pie (DATA) at the front of the array.
		// return [ data, ...pieList ];
		case BUY_PIE:
			return state.map((pie) => (pie.id === data.id ? { ...data } : pie));

		// case PIE_FORM:
		// 	return {...state, ...}

		default:
			return state;
	}
};
