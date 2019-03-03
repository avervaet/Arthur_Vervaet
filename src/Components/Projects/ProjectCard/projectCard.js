import React from'react';
import { Translate } from "react-localize-redux";

const projectCard = (props) =>{
    return(
		<div className="card col-md-4 project-card">
			<a href={props.link}>
			<img className="card-img-top" src={window.location.origin + '/Ressource/img/projects/' + props.img} alt={props.img} />
			<div className="card-body">
			    <h5 className="blue"><Translate id={"projects." + props.id + ".title"}>{props.title}</Translate></h5>
			    <hr className="separator" />
			    <p className="card-text"><Translate id={"projects." + props.id + ".resume"}/></p>
			    <p className="card-text left"><i className="fa fa-calendar blue"></i><b> :  <Translate id={"projects." + props.id + ".date"}>{props.date}</Translate></b></p>
			    <p className="card-text left"><i className="fa fa-cogs blue"></i><b> :  {props.techno}</b></p>
			    <p className="btn btn-primary"><Translate id="button.see">Have a look</Translate></p>
			</div>
			</a>
		</div>

        );
}

export default projectCard;