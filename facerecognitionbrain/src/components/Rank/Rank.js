import React from 'react';

const Rank = ({ user }) => {
	const { name, entries } = user; 
	return (
		<div>
			<div className='white f3'>
				{`${name}, your current Entry Count is...`}
			</div>
			<div className='white f1'>
				{`${entries} Entries`}
			</div>
		</div>
	)
}

export default Rank; 