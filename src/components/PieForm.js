import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Button } from 'reactstrap';
function PieForm(props) {
	const $ = (idd) => document.getElementById(idd);

	const cardStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '1.5em',
		maxWidth: '20em',
		maxHeight: '27em',
		minHeight: '22em',
		paddingTop: '5em'
	};

	return (
		<React.Fragment>
			<Card style={cardStyles} body>
				<CardText>
					<input placeholder="Name of Pie" id="pie-name" type="text" />
					<br />
					<br />
					<input placeholder="Description" id="description" type="text" />
					<br />
					<br />
					<input placeholder="Quantity" id="pie-quantity" type="number" />
				</CardText>
				<hr />
				<Button
					onClick={() => {
						props.addPie(
							$('pie-name').value,
							$('description').value,
							$('pie-quantity').value
						);
					}}
					color="success"
				>
					Submit Order <br />
				</Button>
			</Card>
		</React.Fragment>
	);
}

PieForm.propTypes = {
	img: PropTypes.string,
	count: PropTypes.number,
	key: PropTypes.number,
	addPie: PropTypes.func
};

export default PieForm;
