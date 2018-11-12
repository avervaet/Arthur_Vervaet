import React from'react';

const projectCard = (props) =>{
    return(
		<div className="card col-md-4 project-card">
			<a href={props.link}>
			<img className="card-img-top" src={window.location.origin + '/Ressource/img/' + props.img} alt={props.img} />
			<div className="card-body">
			    <h5 className="blue">{props.title}</h5>
			    <hr className="separator" />
			    <p className="card-text">{props.text}</p>
			    <p className="card-text left"><i className="fa fa-calendar blue"></i><b> :  {props.date}</b></p>
			    <p className="card-text left"><i className="fa fa-cogs blue"></i><b> :  {props.techno}</b></p>
			    <p className="btn btn-primary">Have a look</p>
			</div>
			</a>
		</div>

        );
}

export default projectCard;