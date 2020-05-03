import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieCard from './PieCard';
// import { thistle } from 'color-name';

export default class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pieList: [
				{
					name: 'Pecan Pie',
					img: require('./../assets/pecan.jpeg'),
					count: 4,
					id: 0
				},
				{
					name: 'Apple Pie',
					img: require('./../assets/apple.jpeg'),
					count: 4,
					id: 1
				},
				{
					name: 'Cherry Pie',
					img: require('./../assets/cherry.jpg'),
					count: 4,
					id: 2
				},
				{
					name: 'Blueberry Pie',
					img: require('./../assets/pecan.jpeg'),
					count: 4,
					id: 3
				}
			]
		};
	}

	handlePurchase = (id) => {
		console.log(id);
		if (this.state.pieList[id].count === 0) {
			return;
		} else {
			this.setState((prevState) => ({
				pieList: prevState.pieList.map(
					(pie) => (pie.id === id ? { ...pie, count: pie.count-- } : pie)
				)
			}));
			console.log(this.state.pieList);
		}
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
			<div style={gridContainer}>
				{pieList.map((pie, index) => (
					<PieCard
						name={pie.name}
						img={pie.img}
						count={pie.count}
						key={index}
						onPurchase={this.handlePurchase}
						id={pie.id}
					/>
				))}

				{/* <PieCard
          id = {}
					name={this.state[0].name}
					img={this.state[1].img}
					count={this.state.pecan.count}
					onPurchase={this.handlePurchase}
				/> 
				 <PieCard
					name={this.state.apple.name}
					img={this.state.apple.img}
					onPurchase={this.handlePurchase}
				/>
				<PieCard name={this.state.cherry.name} img={this.state.cherry.img} />
				<PieCard name={this.state.pecan.name} img={this.state.pecan.img} />
				<PieCard name={this.state.pecan.name} img={this.state.pecan.img} /> */}
			</div>
		);
	}
}
