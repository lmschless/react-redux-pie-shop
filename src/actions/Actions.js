import { combineReducers } from 'redux';

export const ADD_PIE = 'ADD_PIE';

export const addPie = (pie) => {
	const { name, longDesciption, img, count, displayDetails, id } = pie;
	return {
		type: ADD_PIE,
		name: name,
		longDesciption: longDesciption,
		img: img,
		count: count,
		displayDetails: displayDetails,
		id: id
	};
};
