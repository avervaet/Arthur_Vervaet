import React from 'react';
import { withLocalize } from "react-localize-redux";

const article = {
  width: '300px',
  height: '300px',
  display: 'inline-block',
  margin: '30px',
  verticalAlign: 'top',
  borderRadius: '5px',
  position: 'relative',
  boxShadow: '-5px 10px 50px #212529'
}

const articleTitleWrapper = {
  position: 'absolute',
  bottom: '0',
  backgroundColor: "rgb(0,0,0,0.5)",
  width: '100%',
  textAlign: "center",
  padding: "10px 0",
  color: 'white'
}


const Article = (props) =>{
  return(
    <div style={article}>
      <img className="card-img-top" src={window.location.origin + '/Ressource/img/articles/' + props.img} alt={props.img} />
      <div style={articleTitleWrapper}>
        <h6>{props.title}</h6>
      </div>
    </div>
  );
}

export default withLocalize(Article);