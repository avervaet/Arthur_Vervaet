import React, { Component } from 'react';
import './Navbar.css'
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import LanguageSwapper from './LangageSwapper/LangageSwapper';
import globalTranslations from "./../../translations/global.json";
import { Link } from 'react-router-dom';
import { renderToStaticMarkup } from "react-dom/server";

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { code: "en", flag:"gb.svg"},
        { code: "fr", flag:"fr.svg"}
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
    
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
	        <img className="lang-icon" src={window.location.origin + '/Ressource/img/lang/' + this.props.activeLanguage.code+'.svg'} alt="activeLang"/>
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
							<Link className= "nav-link top-title" to="/#projects"><b><Translate id="navbar.projects"/></b></Link>
				   		</li>
				   		<li className="nav-item top-div">
							<Link className= "nav-link top-title" to="/#TimeLine"><b><Translate id="navbar.aboutMe"/></b></Link>
				   		</li>
				   		<li className="nav-item top-div">
							<Link className= "nav-link top-title" to="/blog"><b><Translate id="navbar.blog"/></b></Link>
				   		</li>
					</ul>
				</div>
				<div className="mobile_navbar">
					<ul className="nav justify-content-center"> 
						<div>
						<li className="nav-item top-div">
							<i className="fa fa-th-list fa-2x menu-icon" onClick={this.showMenu}></i>	
							<Link className= "nav-link top-title" to="/#projects"><b><Translate id="navbar.projects"/></b></Link>
				   		</li>
				   		</div>
				   		 {
				          this.state.showMenu
				            ? (
				           <div className="menu-container">
					   		<li className="nav-item top-div second-item">
								<Link className= "nav-link top-title" to="/#TimeLine"><b><Translate id="navbar.aboutMe"/></b></Link>
					   		</li>
					   		<li className="nav-item top-div">
								<Link className= "nav-link top-title" to="/blog"><b><Translate id="navbar.blog"/></b></Link>
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