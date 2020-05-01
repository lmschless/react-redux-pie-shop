import React from 'react';
import Header from './Header';
import LeftSection from './LeftSection.js';
import MiddleSection from './MiddleSection.js';
import RightSection from './RightSection.js'; // import '../nav.css';
// import '/components/App.css';

function App() {
	const gridContainer = {
		display: 'grid',
		gridTemplateColumns: '.25fr .75fr 1fr .75fr .25fr',
		gridTemplateRows: '1fr',
		gridColumnGap: '2px',
		gridRowGap: '3px',
		height: '100vh',
		backgroundColor: '#2f2fa2',
		fontFamily: "'Baloo Bhaina 2' cursive"
	};

	return (
		<React.Fragment>
			<Header />
			<div style={gridContainer}>
				<LeftSection />
				<MiddleSection />
				<RightSection />
			</div>
		</React.Fragment>
	);
}

export default App;
