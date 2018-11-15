import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/projectCard';
class Projects extends Component{
	render() {
		return(
			<section id="projects">
				<div className="card title-card">
					<div className="card-body">
					    <h4 className="section-title blue">MY PROJECTS</h4>
					</div>
				</div>
				<div className="mobile_project">
					<ProjectCard img='react.png' 
							title="THIS WEBSITE" 
							text="An responsive website build with React and Bootstrap. It has no back-end because in fact there is no need of it"
							link="https://github.com/avervaet/Arthur_Vervaet"
							date="September 2018"
							techno="React Bootstrap HTML5 CSS3"
							/>
							<ProjectCard img='gaudrophone.jpg' 
							title="GAUDROPHONE" 
							text="An app to create and play your dreams music instrument. Student project realised during my academic semester at University Laval (Quebec)."
							link="https://github.com/avervaet/Gaudrophone"
							date="September - November 2017"
							techno="JAVA"
							/>
							<ProjectCard img='Opossums.jpg' 
							title="ISEP REACT'" 
							text="A website that will ease the communication between students and teachers. I was part of the Opossums' group (that you can see in this picture) and together, we have design and created this app."
							link="https://github.com/avervaet/ISEP_react"
							date="January - June 2017"
							techno="JEE Spring Bootstrap"
							/>
					<ProjectCard img="metro.png" title="PARISIAN SUBWAY"
							text="Java program that creates a graph of the parisian subway, displays a simplified map of it  on screen and allows the user to check the shortest and longest path between two stations"
							link="https://github.com/avervaet/Parisian_subway"
							date="january 2017"
							techno="JAVA JavaScript"
							/>
							<ProjectCard img='filler.jpeg' title="FILLER GAME"
							text="Filler game coded in Java. Can be played with up to 4 players, against human players or AIs. It is also possible to add obstacles, a fog of war and to create your own map."
							link="https://github.com/avervaet/filler_game"
							date="March - June 2016"
							techno="JAVA"
							/>
				</div>
				<div className="laptop_project">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner">
					    <div className="carousel-item active">
					      	<div className="row project-gallery"> 
								<ProjectCard img='react.png' 
								title="THIS WEBSITE" 
								text="An responsive website build with React and Bootstrap. It has no back-end because in fact there is no need of it"
								link="https://github.com/avervaet/Arthur_Vervaet"
								date="September 2018"
								techno="React Bootstrap HTML5 CSS3"
								/>
								<ProjectCard img='gaudrophone.jpg' 
								title="GAUDROPHONE" 
								text="An app to create and play your dreams music instrument. Student project realised during my academic semester at University Laval (Quebec)."
								link="https://github.com/avervaet/Gaudrophone"
								date="September - November 2017"
								techno="JAVA"
								/>
								<ProjectCard img='Opossums.jpg' 
								title="ISEP REACT'" 
								text="A website that will ease the communication between students and teachers. I was part of the Opossums' group (that you can see in this picture) and together, we have design and created this app."
								link="https://github.com/avervaet/ISEP_react"
								date="January - June 2017"
								techno="JEE Spring Bootstrap"
								/>
							</div>
					    </div>
					    <div className="carousel-item">
					      	<div className="row project-gallery"> 
								<ProjectCard img="metro.png" title="PARISIAN SUBWAY"
								text="Java program that creates a graph of the parisian subway, displays a simplified map of it  on screen and allows the user to check the shortest and longest path between two stations"
								link="https://github.com/avervaet/Parisian_subway"
								date="january 2017"
								techno="JAVA JavaScript"
								/>
								<ProjectCard img='filler.jpeg' title="FILLER GAME"
								text="Filler game coded in Java. Can be played with up to 4 players, against human players or AIs. It is also possible to add obstacles, a fog of war and to create your own map."
								link="https://github.com/avervaet/filler_game"
								date="March - June 2016"
								techno="JAVA"
								/>					
							</div>
					    </div>
					  </div>
					  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
        	</section>
		);
	}
}

export default Projects;