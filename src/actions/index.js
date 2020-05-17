import * as c from './ActionTypes';

export const addPie = (pie) => {
	const { name, longDesciption, img, count, displayDetails, id } = pie;
	return {
		type: c.ADD_PIE,
		name: name,
		longDesciption: longDesciption,
		img: img,
		count: count,
		displayDetails: displayDetails,
		id: id
	};
};
