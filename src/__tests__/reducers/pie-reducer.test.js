import pieReducer from '../../reducers/Reducers';
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
		name: 'Blueberry Pie',
		longDescription:
			'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
		img: require('./../../assets/blueberry.jpeg'),
		count: 2,
		displayDetails: false,
		id: 2
	};

	test('Should return default state if no action type is recognized', () => {
		expect(pieReducer({}, { type: null })).toEqual({});
	});

	test('ADD_PIE', () => {
		action = {
			type: ADD_PIE,
			data: pieOrder
		};
		// const state = reducer({ pieReducer: {}, action });
		expect(pieReducer([], action)).toEqual([ pieOrder ]);
	});
});
