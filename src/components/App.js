import React from 'react';
import Header from './Header';
import LeftSection from './LeftSection.js';
import MiddleSection from './MiddleSection.js';
import RightSection from './RightSection.js'; // import '../nav.css';
import ProfileBadge from './ProfileBadge';

function App() {
	const gridContainer = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(20em, 3fr))',
		gridTemplateRows: 'repeat(2, .5fr)',
		gridColumnGap: '.5em',
		gridRowGap: '.5em',
		height: '100vh',
		backgroundColor: '#2f2fa2',
		fontFamily: "'Baloo Bhaina 2' cursive",
		padding: '2em',
		margin: '5em'
	};

	const componentStyle = {};
	return (
		<React.Fragment>
			<Header />
			<div style={gridContainer}>
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />
				<ProfileBadge />

				{/* <LeftSection />
				<MiddleSection />
				<RightSection /> */}
			</div>
		</React.Fragment>
	);
}

export default App;
