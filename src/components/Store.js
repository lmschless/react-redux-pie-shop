import React, { Component } from 'react';
import { v4 } from 'uuid';
import PieCard from './PieCard';
import NavBar from './Nav';
import PieForm from './PieForm';
import { connect } from 'react-redux';
import { addPie, buyPie } from './../actions/Actions';

export default class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicForm: null,
			style: { display: 'none' }

			// pieList: [
			// 	{
			// 		name: 'Pecan Pie',
			// 		longDescription:
			// 			'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
			// 		img: require('./../assets/pecan.jpeg'),
			// 		count: 8,
			// 		displayDetails: false
			// 	},
			// 	{
			// 		name: 'Apple Pie',
			// 		longDescription:
			// 			'Apple pie is an unofficial symbol of the United States and one of its signature comfort foods.',
			// 		img: require('./../assets/apple.jpeg'),
			// 		count: 5,
			// 		displayDetails: false
			// 	},
			// 	{
			// 		name: 'Cherry Pie',
			// 		longDescription:
			// 			'Pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. ',
			// 		img: require('./../assets/cherry.jpg'),
			// 		count: 4,
			// 		displayDetails: false
			// 	},
			// 	{
			// 		name: 'Blueberry Pie',
			// 		longDescription:
			// 			'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. ',
			// 		img: require('./../assets/blueberry.jpeg'),
			// 		count: 2,
			// 		displayDetails: false
			// 	}
			// ]
		};
		// this.state.pieList.forEach((pie) => {
		// 	pie.id = v4();
		// });
	}

	handlePurchase = (id) => {
		// const { dispatch } = this.props;

		const selectedPie = this.props.pieList.filter((pie) => pie.id === id)[0];
		let count = selectedPie.count - 1;
		if (count < 1) {
			count = 0;
		}
		console.log('count greater than 0');
		this.props.buyPie(
			selectedPie.name,
			selectedPie.longDescription,
			selectedPie.img,
			count,
			selectedPie.displayDetails,
			id
		);
		// dispatch(action);
		console.log(selectedPie.count);
		// this.setState({
		// 	pie: selectedPie
		// });
	};

	pieDetail = (id) => {
		const selectedCard = this.props.pieList.filter((pie) => pie.id === id)[0];
		selectedCard.displayDetails = !selectedCard.displayDetails;
		this.setState({
			pie: selectedCard
		});
	};

	addPieToList = (pieName, description, quantity) => {
		const { dispatch } = this.props;
		const id = v4();
		let newPie = {
			name: pieName,
			longDescription: description,
			img: require('./../assets/generic-pie.jpeg'),
			count: quantity,
			id: id,
			displayDetails: false
		};
		const action = addPie(newPie);
		dispatch(action);
		// let newPieList = this.state.pieList;

		// newPieList.unshift(newPie);
		// this.setState({ pieList: newPieList, dynamicForm: null });
	};

	pieForm = () => {
		this.setState({
			dynamicForm: <PieForm addPie={this.addPieToList} />
		});
	};

	render() {
		const gridContainer = {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(20em, 3fr))',
			gridTemplateRows: 'repeat(2, .5fr)',
			gridColumnGap: '.5em',
			gridRowGap: '1em',
			height: '100vh',
			backgroundColor: '#2f2fa2',
			fontFamily: "'Baloo Bhaina 2' cursive",
			padding: '2em',
			margin: '5em'
		};
		// const pieList = this.props.pieList;

		return (
			<React.Fragment>
				<NavBar onForm={this.pieForm} />
				<div style={gridContainer}>
					{this.state.dynamicForm}
					{Object.values(this.props.pieList).map((pie) => (
						<PieCard
							name={pie.name}
							img={pie.img}
							count={pie.count}
							key={pie.id}
							onPurchase={this.handlePurchase}
							showDetails={this.pieDetail}
							hide={pie.displayDetails}
							id={pie.id}
							longDescription={pie.longDescription}
							style={this.state.style}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		pieList: state
	};
};

Store = connect(mapStateToProps, { buyPie })(Store);
