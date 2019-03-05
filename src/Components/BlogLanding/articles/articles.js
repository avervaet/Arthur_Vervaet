import React, { Component } from 'react';


const articleWrapper = {
	minHeight: '100vh',
	width: '100%',
	backgroundColor: 'lightblue'
}

const articleContainer = {
	maxWidth: '800px',
	margin: '0 auto'
}

export class Article1 extends Component {
  render() {
    return(
        <div style={articleWrapper}>
        	<div style={articleContainer}>
	          <h1>L'importance de lier éthique et recherches en IA</h1>
	          <p>
	          	<i>Quoi de mieux pour inaugurer  la naissance de ce site qu'un article traitant de  la  nécessité de lier la recherche 
	          		en intelligence artificielle (et même la recherche en général) avec le processus de réflexion éthique.
	          	</i>
	          </p>
	          <h6>Ethique ?</h6>
	          <p>Tout d'abord entendons-nous sur ce que nous appellerons par la suite processus de réflexion éthique.
	            Par cela nous entendrons l' ensemble des actions destinées  à faire connaître un sujet ou une technologie. 
	            Et ce dans le but de faire réfléchir à ses potentielles applications et dérives.
	           </p>
	           <p>Traditionnellement centres de recherche et comités d'éthique sont séparés.
				Aussi bien géographiquement que socialement, il n'y a pas ou peu d'interaction entre ces deux entités. 
				Les réflexions éthiques n'émergent que lorsque les résultats de la recherche impactent déjà notre société. 
				</p>
				<p>Par exemple après l'arrivée des téléphones portables on a commencé à réfléchir aux impacts des ondes sur l'homme. 
				Ces réflexions ont permis de sensibiliser les utilisateurs au positionnement de leur portable mais aussi a développer 
				des solutions comme les oreillettes.
				</p>
				<p>Toutefois, ce processus "d'action - réaction" induit une grande inertie et des effets sociaux indésirables.
				 Les actions de sensibilisation et de réflexion commencent trop tard et mettent du temps à se propager.
				  Temps durant lequel certains effet indésirables persistent voire s'amplifient.
				 </p>
				<h6>Le cas de l'intelligence artificielle </h6>
				<p>Ce n'est désormais plus un scoop, l'intelligence artificielle fait partie de notre société. 
				En plus de se développer rapidement, ses applications sont multiples et touchent tous les secteurs.  
				</p>
				<p>Dans un domaine aussi impactant, coupler recherche et éthique devient une nécessité pour déceler les applications 
				et les dérives possibles. Fort heureusement, les processus de réflexions ont eux aussi beaucoup évolués.
				</p>
				<p>On peut notamment penser au phénomène des Think Tank ( cercles de pensées). Un excellent moyen de faire connaître 
				les avancées du secteur et de mettre en relations des acteurs de différents milieux.</p>
				<p>C'est aussi pour cela qu' "IA, Ethique et Tocs" a été créé.
				Afin de relayer les dernières nouvelles sur l'IA, faire découvrir le domaine et surtout pouvoir échanger ensemble.</p>
				<p> Nous vivons des années où les innovations technologiques et sociétales s’accélèrent et où nous avons tous les moyens d'influer sur le monde de demain.</p>
				<h6>Arthur Vervaet</h6>
			</div>
        </div>

        );
      }
    }

export class Article2 extends Component {
  render() {
    return(
        <div style={articleContainer}>
          <h1>Article 2</h1>
        </div>
        );
      }
    }