import React from 'react';
import ProfileBadge from './ProfileBadge';

export default function Section() {
	const sectionStyles = {
		// display: 'grid',
		// gridTemplateColumns: '1fr',
		// gridTemplateRows: '1fr 1fr',
		// gridColumnGap: '12px',
		// gridRowGap: '15px',
		// alignItems: 'center'
	};
	const topCard = {
		gridArea: '1 / 4 / 2 / 5',
		padding: '.5em'
		// borderRadius: '2em 2em 2em 2em',
		// padding: '1.5em',
		// border: '.15em solid gray'
	};
	const bottomCard = {
		// gridArea: ' 1 / 4 / 2 / 5',
		// padding: '.5em'
		// border: '.5px solid gray',
		// borderRadius: '2em 2em 2em 2em',
		// padding: '1.5em'
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
