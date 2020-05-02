import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieCard from './PieCard';
import pecan from './../assets/pecan.jpeg';
import apple from './../assets/apple.jpeg';
import cherry from './../assets/cherry.jpg';

export default class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pecan: {
				name: 'Pecan Pie',
				img: require('./../assets/pecan.jpeg'),
				count: 4
			},
			apple: {
				name: 'Apple Pie',
				img: require('./../assets/apple.jpeg'),
				count: 4
			},
			cherry: {
				name: 'Cherry Pie',
				img: require('./../assets/cherry.jpg'),
				count: 4
			},
			blueberry: {
				name: 'Blueberry Pie',
				img: require('./../assets/pecan.jpeg'),
				count: 4
			}
		};
	}

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
		return (
			<div style={gridContainer}>
				<PieCard
					name={this.state.pecan.name}
					img={this.state.pecan.img}
					count={this.state.pecan.count}
				/>
				<PieCard name={this.state.apple.name} img={this.state.apple.img} />
				<PieCard name={this.state.cherry.name} img={this.state.cherry.img} />
				<PieCard name={this.state.pecan.name} img={this.state.pecan.img} />
				<PieCard name={this.state.pecan.name} img={this.state.pecan.img} />
			</div>
		);
	}
}
