import React from 'react';
import './contact.css'

const Contact = () =>{
	return(
		<div className="learn-more">
		<div id="contact">
			<div className="card title-card">
				<div className="card-body">
				    <h3 className="section-title blue">CONTACT ME</h3>
				</div>
			</div>
			<div className="media-wrapper">
				<div className="card media-card">
					<h4 className="media-title"><img className="media-logo" src={window.location.origin + '/Ressource/img/github.png'} alt="GitHub" />Fork me on GitHub</h4>
				</div>
				<div className="card media-card">
					<h4 className="media-title"><img className="media-logo" src={window.location.origin + '/Ressource/img/linkedin.jpg'} alt="LinkedIn" />Join me on LinkedIn</h4>
				</div>
				<a href={window.location.origin + '/Ressource/file/resume.pdf'} className="btn btn-primary resume-btn" download>DOWNLOAD MY RESUME</a>
			</div>
		</div>
		</div>
		);
}

export default Contact;