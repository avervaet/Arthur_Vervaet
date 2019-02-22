import React, { Component } from 'react';
import './TopMenu.css'
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import LanguageSwapper from './../LangageSwapper/LangageSwapper';
import globalTranslations from "./../../translations/global.json";

class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      showLang: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this); 
    this.showLang = this.showLang.bind(this);
    this.closeLang = this.closeLang.bind(this);
    this.props.addTranslation(globalTranslations);
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

   showLang(event) {
    event.preventDefault();
    
    this.setState({ showLang: true }, () => {
      document.addEventListener('click', this.closeLang);
    });
  }

  closeLang() {
    this.setState({ showLang: false }, () => {
      document.removeEventListener('click', this.closeLang);
    });
  }

	render() {
		return(
			<div>
			{
			this.props.activeLanguage === undefined ?(null) :(
	        		<span className="menu-lang" onClick={this.showLang}>
	        <img className="lang-icon" src={window.location.origin + '/Ressource/img/' + this.props.activeLanguage.code+'.svg'} alt="activeLang"/>
	        </span>)	
			}
	        {
	        	this.state.showLang ?(
	        		<LanguageSwapper />
	        		)
	        	:(null)
	        }
				
				<div className="laptop_navbar">
					<ul className="nav justify-content-center"> 
						<li className="nav-item top-div">	
							<a className= "nav-link top-title" href="#projects"><b><Translate id="navbar.projects"/></b></a>
				   		</li>
				   		<li className="nav-item top-div">
							<a className= "nav-link top-title" href="#TimeLine"><b><Translate id="navbar.aboutMe"/></b></a>
				   		</li>
				   		<li className="nav-item top-div">
							<a className= "nav-link top-title" href="#contact"><b><Translate id="navbar.contact"/></b></a>
				   		</li>
					</ul>
				</div>
				<div className="mobile_navbar">
					<ul className="nav justify-content-center"> 
						<div>
						<li className="nav-item top-div">
							<i className="fa fa-th-list fa-2x menu-icon" onClick={this.showMenu}></i>	
							<a className= "nav-link top-title" href="#projects"><b><Translate id="navbar.projects"/></b></a>
				   		</li>
				   		</div>
				   		 {
				          this.state.showMenu
				            ? (
				           <div className="menu-container">
					   		<li className="nav-item top-div second-item">
								<a className= "nav-link top-title" href="#TimeLine"><b><Translate id="navbar.aboutMe"/></b></a>
					   		</li>
					   		<li className="nav-item top-div second-item">
								<a className= "nav-link top-title" href="#contact"><b><Translate id="navbar.contact"/></b></a>
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

export default withLocalize(Navbar);