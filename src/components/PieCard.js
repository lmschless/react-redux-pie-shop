import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, Button } from 'reactstrap';

function PieCard(props) {
	const cardStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '1.5em',
		maxWidth: '20em',
		maxHeight: '30em',
		minHeight: '22em'
	};

	const imgStyles = {
		maxHeight: '16vh',
		maxWidth: '27vw',
		margin: '.25em',
		border: 'solid 1px black',
		cursor: 'pointer'
	};

	return (
		<React.Fragment>
			<Card style={cardStyles} body>
				<h3>
					<CardTitle>{props.name}</CardTitle>
				</h3>
				<center>
					<CardImg
						style={imgStyles}
						top
						width="100%"
						src={props.img}
						alt="Card image cap"
					/>
				</center>
				<div>{props.hide ? <p>{props.longDescription}</p> : null}</div>
				<hr />
				<Button
					id={props.id}
					onClick={() => {
						props.onPurchase(props.id);
					}}
					color="success"
				>
					Purchase {props.name} <br />Quantity Left: <b>{props.count}</b>
				</Button>
			</Card>
		</React.Fragment>
	);
}

PieCard.propTypes = {
	img: PropTypes.string,
	count: PropTypes.number,
	onPurchase: PropTypes.func,
	showDetails: PropTypes.func,
	description: PropTypes.string
};

export default PieCard;
