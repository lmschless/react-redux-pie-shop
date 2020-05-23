export const ADD_PIE = 'ADD_PIE';
export const BUY_PIE = 'BUY_PIE';
export const PIE_FORM = 'PIE_FORM';

export const addPie = (pie) => {
	const { name, longDescription, img, count, displayDetails, id } = pie;
	return {
		type: ADD_PIE,
		data: {
			name,
			longDescription,
			img,
			count,
			displayDetails,
			id
		}
	};
};

export const buyPie = (
	name,
	longDescription,
	img,
	count,
	displayDetails,
	id
) => {
	return {
		type: BUY_PIE,
		data: {
			name,
			longDescription,
			img,
			count,
			displayDetails,
			id
		}
	};
};

// export const pieForm = (id) => {
// 	return {
// 		type: PIE_FORM
// 		data:
// 	};
// };
