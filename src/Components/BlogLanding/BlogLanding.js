import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import Article from './Article'

class BlogLanding extends Component {
  render() {

  	const blogContainer = {
  		backgroundColor: 'lightblue',
  		minHeight: '100vh',
  		paddingTop: '40px'
  	}
  	const blogTitle = {
  		marginTop: '40px',
  		fontFamily: "'Indie Flower', cursive",
  		fontWeight: "600"
  	}

    return(
        <div style={blogContainer}>
          <h1 style={blogTitle}>IA, ethique et Tocs</h1>
          <div>
          	<Article title="Une intelligence artificielle éthique pour un recrutement éthique"/>
          	<Article title="Intelligence et apprentissage"/>
          	<Article title="Que voient les robots ?"/>
          	<Article title="Le Machine Learning causera-t'il sa propre perte ?"/>
          	<Article title="Quel rôle joue nos données"/>
          	<Article title="L'importance de lier éthique et recherche en IA" />
          </div>
        </div>
        );
      }
    }

export default withLocalize(BlogLanding);