import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/Reducers';
import { v4 } from 'uuid';

const initialState = {
	initialPieList: [
		{
			name: 'Pecan Pie',
			longDescription:
				'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
			img: require('./assets/pecan.jpeg'),
			count: 8,
			displayDetails: { display: 'none' },
			id: v4()
		},
		{
			name: 'Apple Pie',
			longDescription:
				'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
			img: require('./assets/apple.jpeg'),
			count: 5,
			displayDetails: false,
			id: v4()
		},
		{
			name: 'Cherry Pie',
			longDescription:
				'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
			img: require('./assets/cherry.jpg'),
			count: 4,
			displayDetails: false,
			id: v4()
		},
		{
			name: 'Blueberry Pie',
			longDescription:
				'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
			img: require('./assets/blueberry.jpeg'),
			count: 2,
			displayDetails: false,
			id: v4()
		}
	],
	dynamicForm: null,
	style: { display: 'none' }
};

// initialState.initialPieList.forEach((pie) => {
// 	pie.id = v4();
// });

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
