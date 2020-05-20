import pieListReducer from '../../reducers/Reducers';
import { ADD_PIE } from '../../actions/Actions';

describe('pie reducer tests', () => {
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

	test('ADD_PIE', () => {
		const { name, longDescription, img, count, displayDetails, id } = pieOrder;
		action = {
			type: ADD_PIE,
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
