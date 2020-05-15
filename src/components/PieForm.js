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
		maxHeight: '30em',
		minHeight: '22em',
		paddingTop: '5em'
	};

	const formStyles = {
		border: 'none',
		fontSize: '1.5em'
	};

	return (
		<React.Fragment>
			<Card style={cardStyles} body>
				<CardText>
					<input
						style={formStyles}
						placeholder="Name of Pie"
						id="pie-name"
						type="text"
					/>
					<br />
					<br />
					<input
						style={formStyles}
						placeholder="Description"
						id="description"
						type="text"
					/>
					<br />
					<br />
					<input
						style={formStyles}
						placeholder="Quantity"
						id="pie-quantity"
						type="number"
					/>
				</CardText>
				<hr />
				<Button
					onClick={() => {
						const quantity = parseInt($('pie-quantity').value);
						if (!isNaN(quantity)) {
							props.addPie(
								$('pie-name').value,
								$('description').value,
								parseInt($('pie-quantity').value)
							);
						} else {
							alert('Please input a number.');
						}
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
	addPie: PropTypes.func
};

export default PieForm;
