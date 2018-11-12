import React from 'react';
import './AboutMe.css'

const AboutMe = () =>{
	return (
		<div id="AboutMe">
			<div className="card title-card">
				<div className="card-body">
				    <h3 className="section-title blue">About Me</h3>
				</div>
			</div>
			<div className="about-card">
				<img className="about-image" src={window.location.origin + '/Ressource/img/profile_picture.png'} />
				<div className="about-section">
					<h4>What i'm doing now? </h4>
						<p className="about-text"><b>Currently i'm working as AI engineer for Cognitive Matchbox a Start up developping matching solutions for hiring process.
								 We got some cool project  on the go so come check our <a href="https://www.cognitive-matchbox.com/">website.</a>
								 I'm working on the AI API CASSY, basically i'm designing training and improving our algorithm based on clustering and neurol network approach.
								 
					</b></p>
				</div>
			</div>
			<div className="about-card">
				<div className="about-section">
					<h4>Any hobbies ? </h4>
						<p className="about-text"><b>Currently i'm working as AI engineer for Cognitive Matchbox a Start up developping matching solutions for hiring process.
								 We got some cool project  on the go so come check our <a href="https://www.cognitive-matchbox.com/">website.</a>
								 I'm working on the AI API CASSY, basically i'm designing training and improving our algorithm based on clustering and neurol network approach.
								 
					</b></p>
				</div>
				<img className="about-image" src={window.location.origin + '/Ressource/img/bouldering.jpg'} />
			</div>
		</div>
		);
}

export default AboutMe;