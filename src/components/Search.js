import React from 'react';

function Search() {
	const searchStyles = {
		height: '2.5em',
		width: '16em',
		float: 'right',
		marginRight: '2em',
		marginTop: '1em',
		borderRadius: '2em',
		border: 'solid',
		backgroundColor: 'white',
		borderColor: '#478fd5',
		itemsAlign: 'center'
	};
	return <input style={searchStyles} placeholder="Search" />;
}

export default Search;
