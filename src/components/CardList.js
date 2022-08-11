import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
return(
	<div>
      	{
      		robots.map((user, i) => { {/*Con este map recorres todo el array de robots*/}
				return (
						<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/>
					);
	})}{/*cardComponent*/}
    </div>
	);
}

export default CardList;