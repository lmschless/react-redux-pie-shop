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

	test('Should return default state if no action type is recognized', () => {
		expect(pieReducer({}, { type: null })).toEqual({});
	});

	test('ADD_PIE', () => {
		let state;
		state = pieReducer(
			{
				initialPieList: [
					{
						name: 'Pecan Pie',
						longDescription:
							'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
						img: '/static/media/pecan.246de394.jpeg',
						count: 8,
						displayDetails: false,
						id: 'b5fcafe7-9ec3-4439-b4d3-80d8c1741f7c'
					},
					{
						name: 'Apple Pie',
						longDescription:
							'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
						img: '/static/media/apple.a90f47db.jpeg',
						count: 5,
						displayDetails: false,
						id: 'facb03d7-ecdc-4c90-baf6-0f8b575650ce'
					},
					{
						name: 'Cherry Pie',
						longDescription:
							'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
						img: '/static/media/cherry.710348b3.jpg',
						count: 4,
						displayDetails: false,
						id: '05ccd1f9-b252-4021-a5b6-903d69b5366e'
					},
					{
						name: 'Blueberry Pie',
						longDescription:
							'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
						img: '/static/media/blueberry.dda13015.jpeg',
						count: 2,
						displayDetails: false,
						id: '8a154d7f-373d-48a9-a1dc-a928e2d21895'
					}
				],
				dynamicForm: false,
				style: { display: 'none' }
			},
			{
				type: 'ADD_PIE',
				data: {
					name: 'Peach',
					longDescription: 'yummy',
					img: '/static/media/generic-pie.4af163d0.jpeg',
					count: 10,
					displayDetails: false,
					id: 'd6586cb2-a356-4c23-acd7-b9b9e617b66a'
				}
			}
		);
		expect(state).toEqual({
			initialPieList: [
				{
					name: 'Peach',
					longDescription: 'yummy',
					img: '/static/media/generic-pie.4af163d0.jpeg',
					count: 10,
					displayDetails: false,
					id: 'd6586cb2-a356-4c23-acd7-b9b9e617b66a'
				},
				{
					name: 'Pecan Pie',
					longDescription:
						'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
					img: '/static/media/pecan.246de394.jpeg',
					count: 8,
					displayDetails: false,
					id: 'b5fcafe7-9ec3-4439-b4d3-80d8c1741f7c'
				},
				{
					name: 'Apple Pie',
					longDescription:
						'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
					img: '/static/media/apple.a90f47db.jpeg',
					count: 5,
					displayDetails: false,
					id: 'facb03d7-ecdc-4c90-baf6-0f8b575650ce'
				},
				{
					name: 'Cherry Pie',
					longDescription:
						'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
					img: '/static/media/cherry.710348b3.jpg',
					count: 4,
					displayDetails: false,
					id: '05ccd1f9-b252-4021-a5b6-903d69b5366e'
				},
				{
					name: 'Blueberry Pie',
					longDescription:
						'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
					img: '/static/media/blueberry.dda13015.jpeg',
					count: 2,
					displayDetails: false,
					id: '8a154d7f-373d-48a9-a1dc-a928e2d21895'
				}
			],
			dynamicForm: false,
			style: { display: 'none' }
		});
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

	test('PIE_FORM', () => {
		let state;
		state = pieReducer(
			{
				dynamicForm: null
			},
			{ type: 'PIE_FORM', data: true }
		);
		expect(state).toEqual({
			dynamicForm: true
		});
	});
});
