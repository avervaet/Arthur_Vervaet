import React from 'react';
import './TopMenu.css'
import TopTitle from './TopTitle/TopTitle';

const topMenu = () => {
	return(<ul className="nav justify-content-center"> 
			<TopTitle name="PROJECTS" link="#projects"/>
			<TopTitle name="ABOUT ME" link="#AboutMe"/>
			<TopTitle name="CONTACT" link="#contact"/>
			</ul>);
}

export default topMenu;