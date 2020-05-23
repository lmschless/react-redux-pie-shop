import { ADD_PIE, BUY_PIE } from './../actions/Actions';
import { v4 } from 'uuid';
import { combineReducers } from 'redux';

export default (state, action) => {
	const { type, data } = action;
	switch (type) {
		case ADD_PIE:
			// returns an array of objects. puts the new pie (DATA) at the front of the array.
			return [ data, ...state ];
		case BUY_PIE:
			return state.map((pie) => (pie.id === data.id ? { ...data } : pie));
		default:
			return state;
	}
};
