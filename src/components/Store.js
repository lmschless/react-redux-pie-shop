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
		// const { dispatch } = this.props;
		const test = id;
		console.log(test);

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

		// const selectedPie = this.props.pieList.filter((pie) => pie.id === id)[0];
		// let count = selectedPie.count - 1;
		// if (count < 1) {
		// 	count = 0;
		// }
		// this.props.buyPie(
		// 	selectedPie.name,
		// 	selectedPie.longDescription,
		// 	selectedPie.img,
		// 	count,
		// 	selectedPie.displayDetails,
		// 	id
		// );
		// dispatch(action);
		// this.setState({
		// 	pie: selectedPie
		// });
	};

	pieDetail = (id) => {
		const selectedCard = this.props.pieList.filter((pie) => pie.id === id)[0];
		selectedCard.displayDetails = !selectedCard.displayDetails;
		// this.setState({
		// 	pie: selectedCard
		// });
	};

	addPieToList = (pieName, description, quantity) => {
		// const { dispatch } = this.props;
		const id = v4();
		let newPie = {
			name: pieName,
			longDescription: description,
			img: require('./../assets/generic-pie.jpeg'),
			count: quantity,
			id: id,
			displayDetails: false
		};
		this.props.pieForm(false);
		this.props.addPie(newPie);
		// reset pie form when new pie is submitted

		// const action = addPie(newPie);
		// dispatch(action);
		// let newPieList = this.state.pieList;

		// newPieList.unshift(newPie);
		// this.setState({ pieList: newPieList, dynamicForm: null });
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
		// const pieList = this.props.pieList;
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
								hide={pie.displayDetails}
								longDescription={pie.longDescription}
								style={this.props.style}
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
		dynamicForm: state.dynamicForm
	};
};

Store = connect(mapStateToProps, { addPie, buyPie, pieForm })(Store);
