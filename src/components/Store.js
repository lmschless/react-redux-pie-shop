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
			pieList: [
				{
					name: 'Pecan Pie',
					img: require('./../assets/pecan.jpeg'),
					count: 4
					// id: 0
				},
				{
					name: 'Apple Pie',
					img: require('./../assets/apple.jpeg'),
					count: 4
					// id: v4()
				},
				{
					name: 'Cherry Pie',
					img: require('./../assets/cherry.jpg'),
					count: 4
					// id: v4()
				},
				{
					name: 'Blueberry Pie',
					img: require('./../assets/pecan.jpeg'),
					count: 4
					// id: v4()
				}
			]
		};
		this.state.pieList.forEach((pie) => {
			pie.id = v4();
			console.log(pie, pie.id);
		});
	}

	handlePurchase = (id) => {
		console.log(id, this.state.pieList);
		if (this.state.pieList[0].count === 0) {
			return;
		} else {
			console.log(this.state.pieList.count);
			this.setState((prevState) => ({
				pieList: this.state.pieList.map(
					(pie) => (pie.id === id ? { ...pie, count: pie.count-- } : pie)
				)
			}));
		}
		console.log(this.state.pieList);
	};

	addPieToList = (pieName, quantity, id) => {
		let newPie = this.state.pieList;
		const newId = v4();
		// console.log(pieName, quantity, id);
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
		console.log(this.state.pieList[0]);

		return (
			<React.Fragment>
				<NavBar />
				<div style={gridContainer}>
					{/* <PieForm addPie={this.addPieToList} /> */}
					{pieList.map((pie) => (
						<PieCard
							name={pie.name}
							img={pie.img}
							count={pie.count}
							key={pie.id}
							onPurchase={this.handlePurchase}
							id={pie.id}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}
