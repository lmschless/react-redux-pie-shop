import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
	const { name, longDescription, img, count, displayDetails, id } = action;
	switch (action.type) {
		case c.PIE_LIST:
			return Object.assign({}, state, {
				[id]: {
					name: name,
					longDescription: longDescription,
					img: img,
					count: count,
					displayDetails: displayDetails
				}
			});
		default:
			return state;
	}
};
