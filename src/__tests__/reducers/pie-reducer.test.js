import pieReducer from '../../reducers/Reducers';
import { ADD_PIE, BUY_PIE } from '../../actions/Actions';

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

	test('BUY_PIE', () => {
		let state;
		state = pieReducer(
			{
				initialPieList: [
					{
						name: 'Apple Pie',
						longDescription:
							'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
						img: '/static/media/apple.a90f47db.jpeg',
						count: 5,
						displayDetails: false,
						id: '90ce9d0a-b2a2-4e4f-ba58-872d1ba6c5ed'
					}
				]
			},
			{
				type: 'BUY_PIE',
				data: {
					name: 'Apple Pie',
					longDescription:
						'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
					img: '/static/media/apple.a90f47db.jpeg',
					count: 4,
					displayDetails: false,
					id: '90ce9d0a-b2a2-4e4f-ba58-872d1ba6c5ed'
				}
			}
		);

		expect(state).toEqual({
			initialPieList: [
				{
					name: 'Apple Pie',
					longDescription:
						'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
					img: '/static/media/apple.a90f47db.jpeg',
					count: 4,
					displayDetails: false,
					id: '90ce9d0a-b2a2-4e4f-ba58-872d1ba6c5ed'
				}
			]
		});
	});
});

// state = reducers(
// 	{
// 		initialPieList: [
// 			{
// 				name: 'Pecan Pie',
// 				longDescription:
// 					'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
// 				img: '/static/media/pecan.246de394.jpeg',
// 				count: 8,
// 				displayDetails: false,
// 				id: 'de46639f-e900-458b-ac00-198a4b824e59'
// 			},
// 			{
// 				name: 'Apple Pie',
// 				longDescription:
// 					'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
// 				img: '/static/media/apple.a90f47db.jpeg',
// 				count: 5,
// 				displayDetails: false,
// 				id: '90ce9d0a-b2a2-4e4f-ba58-872d1ba6c5ed'
// 			},
// 			{
// 				name: 'Cherry Pie',
// 				longDescription:
// 					'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
// 				img: '/static/media/cherry.710348b3.jpg',
// 				count: 4,
// 				displayDetails: false,
// 				id: '0541721a-748f-419b-8b3c-5418d263ca58'
// 			},
// 			{
// 				name: 'Blueberry Pie',
// 				longDescription:
// 					'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
// 				img: '/static/media/blueberry.dda13015.jpeg',
// 				count: 2,
// 				displayDetails: false,
// 				id: '067508a4-ecfa-4df1-873c-eeda48d773b0'
// 			}
// 		],
// 		dynamicForm: null,
// 		style: { display: 'none' }
// 	},
// 	{
// 		type: 'BUY_PIE',
// 		data: {
// 			name: 'Apple Pie',
// 			longDescription:
// 				'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
// 			img: '/static/media/apple.a90f47db.jpeg',
// 			count: 4,
// 			displayDetails: false,
// 			id: '90ce9d0a-b2a2-4e4f-ba58-872d1ba6c5ed'
// 		}
// 	}
// );
