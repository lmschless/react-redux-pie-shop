import pieListReducer from '../../reducers/pie-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('pieListReducer', () => {
	let action;

	const currentState = {
		1: {
			name: 'Apple',
			longDescription: 'This is a long description',
			img: require('./../assets/apple.jpeg'),
			count: 5,
			displayDetails: false
		}
	};

	test('Should return default state if no action type is recognized', () => {
		expect(pieListReducer({}, { type: null })).toEqual({});
	});
});
