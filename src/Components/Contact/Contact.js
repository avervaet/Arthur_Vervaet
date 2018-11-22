import React from 'react';
import './contact.css'
import { Translate } from "react-localize-redux";

const Contact = () =>{
	return(
		<div className="learn-more">
		<div id="contact">
			<h3 className="section-title"><Translate id="contact.title"/></h3>
			<div className="media-wrapper">
				<div className="card media-card">
					<h4 className="media-title"><img className="media-logo" src={window.location.origin + '/Ressource/img/github.png'} alt="GitHub" /><Translate id="contact.github"/></h4>
				</div>
				<div className="card media-card">
					<h4 className="media-title"><img className="media-logo" src={window.location.origin + '/Ressource/img/linkedin.jpg'} alt="LinkedIn" /><Translate id="contact.linkedin"/></h4>
				</div>
				<a href={window.location.origin + '/Ressource/file/resume.pdf'} className="btn btn-primary resume-btn" download><Translate id="contact.download"/></a>
			</div>
		</div>
		</div>
		);
}

export default Contact;