export const ADD_PIE = 'ADD_PIE';

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
