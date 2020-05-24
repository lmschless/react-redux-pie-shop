import React, { Component } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import PieCard from './PieCard';
import NavBar from './Nav';
import PieForm from './PieForm';
import { connect } from 'react-redux';
import { addPie, buyPie, pieForm } from './../actions/Actions';

export default class Store extends Component {
	handlePurchase = (id) => {
		const selectedPie = this.props.pieList.filter((pie) => pie.id === id)[0];
		let count = selectedPie.count - 1;
		if (count < 1) {
			count = 0;
		}
		this.props.buyPie(
			selectedPie.name,
			selectedPie.longDescription,
			selectedPie.img,
			count,
			selectedPie.displayDetails,
			id
		);
	};

	pieDetail = (id) => {
		const selectedCard = this.props.pieList.filter((pie) => pie.id === id)[0];
		let displayDetails = null;
		this.props.pieDetails(
			selectedCard.name,
			selectedCard.longDescription,
			selectedCard.img,
			selectedCard.count,
			displayDetails,
			id
		);
	};

	addPieToList = (pieName, description, quantity) => {
		const id = v4();
		let newPie = {
			name: pieName,
			longDescription: description,
			img: require('./../assets/generic-pie.jpeg'),
			count: quantity,
			id: id,
			displayDetails: false
		};
		// reset pie form when new pie is submitted
		this.props.pieForm(false);
		this.props.addPie(newPie);
	};

	pieForm = () => {
		// handles showing the order form when nav button is clicked.
		this.props.pieForm(true);
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

		return (
			<React.Fragment>
				<NavBar onForm={this.pieForm} />
				<div style={gridContainer}>
					{this.props.dynamicForm ? (
						<PieForm addPie={this.addPieToList} />
					) : null}
					{Object.values(this.props.pieList).map((pie) => {
						return (
							<PieCard
								name={pie.name}
								img={pie.img}
								count={pie.count}
								key={pie.id}
								id={pie.id}
								onPurchase={this.handlePurchase}
								showDetails={this.pieDetail}
								hide={this.props.details}
								longDescription={pie.longDescription}
								style={this.props.details}
							/>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

Store.propTypes = {
	pieList: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		pieList: state.initialPieList,
		dynamicForm: state.dynamicForm,
		details: state.initialPieList
	};
};

Store = connect(mapStateToProps, { addPie, buyPie, pieForm })(Store);
