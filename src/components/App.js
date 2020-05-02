import React from 'react';
import NavBar from './Nav';
import Store from './Store';
// import ProfileBadge from './PieCard';

function App() {
	const componentStyle = {};
	return (
		<React.Fragment>
			<NavBar />
			<Store />
		</React.Fragment>
	);
}

export default App;
