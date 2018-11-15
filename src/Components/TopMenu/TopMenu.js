import React, { Component } from 'react';
import './TopMenu.css'

class Navbar extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

	render() {
		return(
			<div>
				<div className="laptop_navbar">
					<ul className="nav justify-content-center"> 
						<li className="nav-item top-div">	
							<a className= "nav-link top-title" href="#projects"><b>PROJECTS</b></a>
				   		</li>
				   		<li className="nav-item top-div">
							<a className= "nav-link top-title" href="#AboutMe"><b>ABOUT ME</b></a>
				   		</li>
				   		<li className="nav-item top-div">
							<a className= "nav-link top-title" href="#contact"><b>CONTACT</b></a>
				   		</li>
					</ul>
				</div>
				<div className="mobile_navbar">
					<ul className="nav justify-content-center"> 
						<div>
						<li className="nav-item top-div">
							<i className="fa fa-th-list fa-2x menu-icon" onClick={this.showMenu}></i>	
							<a className= "nav-link top-title" href="#projects"><b>PROJECTS</b></a>
				   		</li>
				   		</div>
				   		 {
				          this.state.showMenu
				            ? (
				           <div>
					   		<li className="nav-item top-div second-item">
								<a className= "nav-link top-title" href="#AboutMe"><b>ABOUT ME</b></a>
					   		</li>
					   		<li className="nav-item top-div second-item">
								<a className= "nav-link top-title" href="#contact"><b>CONTACT</b></a>
					   		</li>
				   		</div>
				   		    )
			            : (
			              null
			            )
			        }
					</ul>
				</div>
			</div>
		);
	}
}

export default Navbar;