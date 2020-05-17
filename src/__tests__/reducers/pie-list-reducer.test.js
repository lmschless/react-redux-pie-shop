import pieListReducer from '../../reducers/pie-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('pieListReducer', () => {
	const currentState = {
		1: {
			name: 'Apple',
			longDescription: 'This is a long description',
			img: require('./../../assets/apple.jpeg'),
			count: 5,
			displayDetails: false,
			id: 1
		}
	};
	let action;

	const pieOrder = {
		2: {
			name: 'Blueberry Pie',
			longDescription:
				'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
			img: require('./../../assets/blueberry.jpeg'),
			count: 2,
			displayDetails: false,
			id: 2
		}
	};

	test('Should return default state if no action type is recognized', () => {
		expect(pieListReducer({}, { type: null })).toEqual({});
	});

	test('Should successfully add new pie data to pieList', () => {
		const { name, longDescription, img, count, displayDetails, id } = pieOrder;
		action = {
			type: c.ADD_PIE,
			name: name,
			longDescription: longDescription,
			img: img,
			count: count,
			displayDetails: displayDetails,
			id: id
		};
		expect(pieListReducer({}, action)).toEqual({
			[id]: {
				name: name,
				longDescription: longDescription,
				img: img,
				count: count,
				displayDetails: displayDetails,
				id: id
			}
		});
	});
});
