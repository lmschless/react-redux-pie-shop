import React from 'react';
import { Card, CardTitle, CardText, CardImg, Button } from 'reactstrap';
// import ActionButtons from './ActionButtons';
import logo from './../assets/pecan.jpeg';
const Example = (props) => {
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
				<CardTitle>Pie Name</CardTitle>

				<center>
					<CardImg
						style={imgStyles}
						top
						width="100%"
						src={logo}
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
};

export default Example;
