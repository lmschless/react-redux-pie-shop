import { ADD_PIE } from './../actions/Actions';
import { v4 } from 'uuid';
import { combineReducers } from 'redux';

// export const initialPieList = [
// 	{
// 		name: 'Pecan Pie',
// 		longDescription:
// 			'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
// 		img: require('./../assets/pecan.jpeg'),
// 		count: 8,
// 		displayDetails: false
// 	},
// 	{
// 		name: 'Apple Pie',
// 		longDescription:
// 			'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
// 		img: require('./../assets/apple.jpeg'),
// 		count: 5,
// 		displayDetails: false
// 	},
// 	{
// 		name: 'Cherry Pie',
// 		longDescription:
// 			'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
// 		img: require('./../assets/cherry.jpg'),
// 		count: 4,
// 		displayDetails: false
// 	},
// 	{
// 		name: 'Blueberry Pie',
// 		longDescription:
// 			'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
// 		img: require('./../assets/blueberry.jpeg'),
// 		count: 2,
// 		displayDetails: false
// 	}
// ];

// initialPieList.forEach((pie) => {
// 	pie.id = v4();
// });

export default (state, action) => {
	const { type, data } = action;
	switch (type) {
		case ADD_PIE:
			return [ { ...data, ...state } ];
		default:
			return state;
	}
};

// export default combineReducers({ pieReducer });

// export default (state = {}, action) => {
// 	const { type, data } = action;
// 	switch (type) {
// 		case ADD_PIE:
// 			return Object.assign({}, state, {
// 				[id]: {
// 					name: name,
// 					longDescription: longDescription,
// 					img: img,
// 					count: count,
// 					displayDetails: displayDetails,
// 					id: id
// 				}
// 			});
// 		default:
// 			return state;
// 	}
// };
