import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardImg, Button } from 'reactstrap';
// import ActionButtons from './ActionButtons';
function PieCard(props) {
	const profileStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '2em',
		maxWidth: '20em',
		maxHeight: '25em',
		minHeight: '22em'
	};

	const imgStyles = {
		maxHeight: '12vh',
		maxWidth: '25vw'
	};
	return (
		<React.Fragment>
			<Card style={profileStyles} body>
				<CardTitle>{props.name}</CardTitle>

				<center>
					<CardImg
						style={imgStyles}
						top
						width="100%"
						src={props.img}
						alt="Card image cap"
					/>
				</center>
				<CardText>
					React was originally developed by Facebook to manage the dynamic
				</CardText>
				<hr />
				<Button color="success">Buy Pie</Button>
			</Card>
		</React.Fragment>
	);
}

PieCard.propTypes = {
	img: PropTypes.string
};

export default PieCard;
