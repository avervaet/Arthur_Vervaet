import React from 'react';

const topMenu = (props) =>{
	return(<li className="nav-item top-div">
			<a className= "nav-link top-title" href={props.link}> {props.name}</a>
		   </li>);
}


export default topMenu;