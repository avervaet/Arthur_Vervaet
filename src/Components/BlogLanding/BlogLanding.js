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
            <a href="https://www.linkedin.com/pulse/une-intelligence-artificielle-%C3%A9thique-pour-un-marc-pesah/">
            	<Article title="Une intelligence artificielle éthique pour un recrutement éthique"
            			img="recrutement-ethique.png"/>
            </a>
            <a href="/blog/article/1">
            	<Article title="Intelligence et apprentissage"
                  img="intelligence-apprentissage.png" />
            </a>
            <a href="/blog/article/1">
            	<Article title="Que voient les robots ?"
                  img="vision-robots.png" />
            </a>
            <a href="/blog/article/1">
          	   <Article title="Le Machine Learning causera-t'il sa propre perte ?"
                img="machine-learning-perte.png" />
            </a>
            <a href="/blog/article/2">
            	<Article title="Quel rôle joue nos données"
                  img="role-donnee.png"/>
            </a>
            <a href="/blog/article/1">
            	<Article title="L'importance de lier éthique et recherche en IA" 
                  img="ethique-recherche-ia.png"/>
            </a>
          </div>
        </div>
        );
      }
    }

export default withLocalize(BlogLanding);