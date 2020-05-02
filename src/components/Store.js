import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieCard from './PieCard';
import pecan from './../assets/pecan.jpeg';

export default class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pecan: {
				name: 'Pecan Pie',
				img: require('./../assets/pecan.jpeg')
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
				<PieCard name={this.state.pecan.name} img={this.state.pecan.img} />
				<PieCard />
				<PieCard />
				<PieCard />
				<PieCard />
			</div>
		);
	}
}
