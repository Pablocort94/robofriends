import React from 'react';

const Card = ({ name, email, id}) => { {/*aca estas haciendo un destructuring estas tomando los parametros de robots.js*/} 
	
	return(
		<div className= 'tc bg-blue dib br3 ma2 grow bw2 shadow-5'>{/*esto se saca de tachyons*/}
			<img alt='robots' src={`https://robohash.org/${id}200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
	   </div>
	);
}

export default Card;