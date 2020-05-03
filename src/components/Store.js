import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import PieCard from './PieCard';
import NavBar from './Nav';
import PieForm from './PieForm';

// import { thistle } from 'color-name';
export default class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicForm: null,
			pieList: [
				{
					name: 'Pecan Pie',
					description: 'Yummy Pecan Pie',
					img: require('./../assets/pecan.jpeg'),
					count: 4
					// id: 0
				},
				{
					name: 'Apple Pie',
					description: 'Yummy Apple Pie',
					img: require('./../assets/apple.jpeg'),
					count: 4
					// id: v4()
				},
				{
					name: 'Cherry Pie',
					description: 'Yummy Cherry Pie',
					img: require('./../assets/cherry.jpg'),
					count: 4
					// id: v4()
				},
				{
					name: 'Blueberry Pie',
					description: 'Yummy Blueberry Pie',
					img: require('./../assets/blueberry.jpeg'),
					count: 4
					// id: v4()
				}
			]
		};
		this.state.pieList.forEach((pie) => {
			pie.id = v4();
			// console.log(pie, pie.id);
		});
	}

	handlePurchase = (id) => {
		const selectedPie = this.state.pieList.filter((pie) => pie.id === id)[0];
		if (selectedPie.count > 0) {
			selectedPie.count = selectedPie.count - 1;
		} else {
			return selectedPie;
		}
		this.setState({
			pie: selectedPie
		});
		console.log(selectedPie);
		// if (pieList[0].count === 0) {
		// 	return;
		// } else {
		// 	console.log(this.state.pieList.count);
		// 	this.setState((prevState) => ({
		// 		pieList: this.state.pieList.map(
		// 			(pie) => (pie.id === id ? { ...pie, count: pie.count-- } : pie)
		// 		)
		// 	}));
		// }
		// console.log(this.state.pieList);
	};

	addPieToList = (pieName, quantity) => {
		let newPieList = this.state.pieList;
		const id = v4();
		let newPie = {
			name: pieName,
			img: require('./../assets/generic-pie.jpeg'),
			count: quantity,
			id: id
		};
		newPieList.unshift(newPie);
		this.setState({ pieList: newPieList });
		// console.log(pieName, quantity, id);
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
			gridRowGap: '.5em',
			height: '100vh',
			backgroundColor: '#2f2fa2',
			fontFamily: "'Baloo Bhaina 2' cursive",
			padding: '2em',
			margin: '5em'
		};
		const pieList = this.state.pieList;
		console.log(pieList);

		return (
			<React.Fragment>
				<NavBar onForm={this.pieForm} />
				<div style={gridContainer}>
					{this.state.dynamicForm}
					{pieList.map((pie) => (
						<PieCard
							name={pie.name}
							img={pie.img}
							count={pie.count}
							key={pie.id}
							onPurchase={this.handlePurchase}
							id={pie.id}
							description={pie.description}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}
