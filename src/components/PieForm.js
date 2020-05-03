import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardImg, Button } from 'reactstrap';
// import ActionButtons from './ActionButtons';
function PieForm(props) {
	const $ = (idd) => document.getElementById(idd);

	const cardStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '1.5em',
		maxWidth: '20em',
		maxHeight: '27em',
		minHeight: '22em'
	};

	const imgStyles = {
		maxHeight: '14vh',
		maxWidth: '27vw',
		margin: '.25em',
		border: 'solid 1px black'
	};

	return (
		<React.Fragment>
			<Card style={cardStyles} body>
				<h3>
					<CardTitle>
						<label>
							Name of Pie: <input id="pie-name" />
						</label>
					</CardTitle>
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
				<CardText>
					<label>
						Quantity: <input id="pie-quantity" />
					</label>
				</CardText>
				<hr />
				<Button
					onClick={() => {
						props.addPie($('pie-name').value, $('pie-quantity').value, 5);
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
