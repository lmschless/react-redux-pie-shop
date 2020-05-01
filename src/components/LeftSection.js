import React from 'react';
import ProfileBadge from './ProfileBadge';

export default function Section() {
	const sectionStyles = {
		// display: 'grid',
		// gridTemplateColumns: '1fr',
		// gridTemplateRows: '1fr 1.8fr',
		// gridColumnGap: '12px',
		// gridRowGap: '15px',
		// alignItems: 'center',
		// justifyContent: 'center'
	};
	const topCard = {
		gridArea: ' 1 / 2 / 2 / 3',
		border: '0px',
		borderRadius: '10000px',
		padding: '.5em'
		// border: '.15em solid gray'
	};
	const bottomCard = {
		gridArea: '2/1/3/2',
		border: '0px',
		borderRadius: '2em 2em 2em 2em',
		padding: '.5em'
	};
	return (
		<React.Fragment>
			<div style={topCard}>
				<ProfileBadge />
			</div>
			{/* <div style={bottomCard}>
				<ProfileBadge />
			</div> */}
		</React.Fragment>
	);
}
