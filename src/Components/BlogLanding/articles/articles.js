import React, { Component } from 'react';


const articleWrapper = {
	minHeight: '100vh',
	width: '100%',
	backgroundColor: 'lightblue',
	padding: '60px 0'
}

const articleContainer = {
	maxWidth: '800px',
	margin: '0 auto',
	backgroundColor: 'white',
	padding: '40px',
	boxShadow: '-5px 10px 50px #212529'
}

const articleTitle = {
	fontSize: '1.8rem'
}

const articleSubTitle = {
	fontWeight: '600',
	marginTop: '30px'
}

const articleParagraph = {

}
export class Article1 extends Component {
  render() {
    return(
        <div style={articleWrapper}>
        	<div style={articleContainer}>
	          <h1 style={articleTitle}>L'importance de lier éthique et recherches en IA</h1>
	          <p style={articleParagraph}>
	          	<i>Quoi de mieux pour inaugurer  la naissance de ce site qu'un article traitant de  la  nécessité de lier la recherche 
	          		en intelligence artificielle (et même la recherche en général) avec le processus de réflexion éthique.
	          	</i>
	          </p>
	          <h6 style={articleSubTitle}>Ethique ?</h6>
	          <p style={articleParagraph}>Tout d'abord entendons-nous sur ce que nous appellerons par la suite processus de réflexion éthique.
	            Par cela nous entendrons l' ensemble des actions destinées  à faire connaître un sujet ou une technologie. 
	            Et ce dans le but de faire réfléchir à ses potentielles applications et dérives.
	           </p>
	           <p style={articleParagraph}>Traditionnellement centres de recherche et comités d'éthique sont séparés.
				Aussi bien géographiquement que socialement, il n'y a pas ou peu d'interaction entre ces deux entités. 
				Les réflexions éthiques n'émergent que lorsque les résultats de la recherche impactent déjà notre société. 
				</p>
				<p style={articleParagraph}>Par exemple après l'arrivée des téléphones portables on a commencé à réfléchir aux impacts des ondes sur l'homme. 
				Ces réflexions ont permis de sensibiliser les utilisateurs au positionnement de leur portable mais aussi a développer 
				des solutions comme les oreillettes.
				</p>
				<p style={articleParagraph}>Toutefois, ce processus "d'action - réaction" induit une grande inertie et des effets sociaux indésirables.
				 Les actions de sensibilisation et de réflexion commencent trop tard et mettent du temps à se propager.
				  Temps durant lequel certains effet indésirables persistent voire s'amplifient.
				 </p>
				<h6 style={articleSubTitle}>Le cas de l'intelligence artificielle </h6>
				<p style={articleParagraph}>Ce n'est désormais plus un scoop, l'intelligence artificielle fait partie de notre société. 
				En plus de se développer rapidement, ses applications sont multiples et touchent tous les secteurs.  
				</p>
				<p style={articleParagraph}>Dans un domaine aussi impactant, coupler recherche et éthique devient une nécessité pour déceler les applications 
				et les dérives possibles. Fort heureusement, les processus de réflexions ont eux aussi beaucoup évolués.
				</p>
				<p style={articleParagraph}>On peut notamment penser au phénomène des Think Tank ( cercles de pensées). Un excellent moyen de faire connaître 
				les avancées du secteur et de mettre en relations des acteurs de différents milieux.</p>
				<p style={articleParagraph}>C'est aussi pour cela qu' "IA, Ethique et Tocs" a été créé.
				Afin de relayer les dernières nouvelles sur l'IA, faire découvrir le domaine et surtout pouvoir échanger ensemble.</p>
				<p> Nous vivons des années où les innovations technologiques et sociétales s’accélèrent et où nous avons tous les moyens d'influer sur le monde de demain.</p>
				<h6 style={articleSubTitle}>Arthur Vervaet</h6>
			</div>
        </div>

        );
      }
    }

export class Article2 extends Component {
  render() {
    return(
    	<div style={articleWrapper}>
	        <div style={articleContainer}>
	          <h1 style={articleTitle}>Quel rôle jouent nos données ?</h1>
	          <p style={articleParagraph}>
	          	<i>Ce n'est désormais plus un secret, nous sommes à l'ère du Big Data. Nous sommes de plus en plus gourmands d'objets 
	          	connectés et de services en ligne, grossissant ainsi  toujours plus notre trace numérique. Nous n'allons pas parler ici 
	          	des enjeux que stocker et traiter toutes ces données induisent. Mais pourquoi les entreprises sont-elles de plus en plus 
	          	friandes de données ? Ce phénomène atteint aujourd'hui des proportions telles que l'on parle de "guerre des données" !
	          	</i>
	          </p>
	          <h6 style={articleSubTitle}>Big Data ?</h6>
	          <p style={articleParagraph}>L'origine du terme Big Data est assez simple, même si aujourd'hui ce terme est synonyme d'immenses quantités de données.
				A l'origine, on parlait de Big data lorsqu'un problème comprenait :

				Une quantité de données problématiques à stocker

				Un flux de données trop important pour être traité

				Des données trop peu structurées pour être stockées

				Mais pourquoi résoudre ces challenges représente un enjeu important pour les entreprises?
				</p>
				<h6 style={articleSubTitle}>La data, source de connaissances !</h6>
				<p style={articleParagraph}>En premier lieu, les données récoltées par une entreprise lui permettent de mieux 
				connaître ses clients. Et donc de pouvoir leur proposer des services ou promotions plus adaptés. C'est également un 
				excellent moyen de déceler un nouveau marché.
				Pour résumer, les données permettent d'avoir une meilleure vision d'un marché ou de ses clients. 
				Et qui dit bonne vision dit bonne capacité à anticiper le futur et à faire des choix judicieux. 
				Cette faculté est inestimable voire même vitale pour une entreprise.
				Pour assurer son développement et sa survie une entreprise doit posséder une bonne compréhension du marché qui 
				l'entoure. Et donc pour cela développer ses capacités de traitement et de stockage des données.
				</p>
				<h6 style={articleSubTitle}>Un essor des algorithmes</h6>
				<p style={articleParagraph}>On assiste également à un développement spectaculaire des algorithmes prédictifs (Machine Learning).
				Ces mêmes algorithmes, conçus pour traiter des volumes gigantesques d'informations afin de déceler des corrélations, 
				ermettent la mise en place de modèles dit prédictifs .
				Ce sont ces même algorithmes qui servent de moteurs aux dernières avancées en intelligence artificielle et qui 
				permettent aux machines d'apprendre par elles-mêmes. Cependant pour continuer à s'améliorer ces algorithmes nécessitent
				des quantités toujours plus pharaoniques de données. Transformant ainsi la course au meilleur algorithme en course a 
				la collecte d'informations.
				Afin de satisfaire un appétit toujours plus grand pour les données, les entreprises ont mis au point divers stratagèmes 
				pour profiter au maximum de notre utilisation d'internet.
				</p>
				<p style={articleParagraph}>
				Vous l'avez peut être remarqué, depuis quelques temps les captchas vous demandant de reconnaître des mots ont cédés la place 
				a des captchas vous demandant de reconnaître des panneaux de signalisation.
				Ce changement a priori anodin présente pourtant un enjeu majeur pour les géants du web. En effet les captcha servent aussi à 
				utiliser les utilisateurs pour étiqueter des données. C'est grâce a ce système qu'ont été mis au point les meilleurs algorithmes 
				de reconnaissance écrite, enjeux majeurs depuis les années 2000.
				Désormais ce sont les voitures autonomes qui ont le vent en poupe, ces voitures nécessitent une bonne reconnaissance de son environnement,
				 d'où la reconversion de nos bons vieux captcha en analyse de la circulation.
				</p>
				<h6 style={articleSubTitle}>Une menace pour la vie privée</h6>
				<p style={articleParagraph}>Malheureusement cette course à la donnée pousse également les entreprises à toujours fouiller plus loin dans 
				notre intimité pour trouver de précieuses informations. Les réseaux sociaux menant la charge, profitant de leur image d'innocent 
				lieu de partage pour puiser de précieuses informations sur notre personnalité, nos goûts et nos habitudes.
				Même si les lois de protection des données se développent et protègent de mieux en mieux les utilisateurs, 
				il reste nécessaire de faire attention a ce que l'on partage. D'autant plus que l'on est pas toujours au courant 
				de quand et à qui on le partage.
				</p>
				<b>Social connect :</b>
				<p style={articleParagraph}>
				Petite chose à savoir, lors d'une connexion à un site via Facebook, Google ou Twitter connect, vous acceptez 
				implicitement que ce site puisse lire et utiliser une partie de vos informations.
				Gardez donc bien cela en tête et vérifiez à qui vous transmettez vos données avant d'utiliser cette fonctionnalité.
				</p>
				<h6 style={articleSubTitle}>Rien à y gagner ?</h6>
				<p style={articleParagraph}>Et pourtant nous avons également beaucoup à gagner dans cette course aux données. 
				Nous rentrons dans un monde marqué par le service hyper personnalisé. Où les compagnies souhaitent nous proposer 
				précisément ce que l'on souhaite.
				Et cela possède de nombreux avantages tel qu'un accès a de meilleurs contenus ou une navigation plus agréable .
				</p>
				<p style={articleParagraph}>Personne ne se plaindra de la disparition d'une grande partie des publicités présentes 
				sur le net au profit de certaines plus ciblées et plus pertinente. Pour un site de streaming musical par exemple, 
				vos informations peuvent grandement servir a enrichir leurs algorithmes et ainsi leurs permettre de vous proposer 
				une sélection plus affûtée et personnelle.
				</p>
				<h6 style={articleSubTitle}>Pour finir :</h6>
				<p style={articleParagraph}>Je vous invite donc à mieux réfléchir à ce que vous souhaitez pour vos données.
				Vous avez le pouvoir de savoir à qui vous voulez les transmettre et quels services vous souhaiter voir se développer.
				Nos données sont devenue une monnaie implicite que nous transmettons contre de meilleurs fonctionnalités. 
				Il est nécessaire d'en être conscient et d'agir en conséquence.
				</p>
				<h6 style={articleSubTitle}> Arthur Vervaet </h6>
	        </div>
	    </div>
        );
      }
    }

export class Article3 extends Component {
  render() {
    return(
    	<div style={articleWrapper}>
	        <div style={articleContainer}>
	          <h1 style={articleTitle}>Le Machine Learning causera-t'il sa propre perte ?</h1>
	          <p style={articleParagraph}>
		          <i>  Les intelligences artificielles "pollueraient-elles " leur environnement? En effet en extrayant la richesse des 
		          données pour n'en produire que des optimales les IA basées sur du Machine Learning altèrent leurs résultats futurs.
		          </i>
	          </p>
	          <h6 style={articleSubTitle}>Machine Learning :</h6>
	          <p style={articleParagraph}>Pour comprendre cette faille il est nécessaire de revenir sur le fonctionnement du Machine Learning. 
	          Afin de permettre aux machines d’apprendre, ces algorithmes utilisent de grandes quantités de données dites d’entraînement afin de 
	          s’améliorer. Une fois correctement entraînés, ces algorithmes deviennent capables de prédire une action optimale en fonction d’une situation.
	          </p>
	          <h6 style={articleSubTitle}>Exemple : </h6>
	          <p style={articleParagraph}>Mettons que nous sommes le gérant d’une grande marque de vêtements et l’on souhaite résoudre le problème suivant :</p>
	          <p style={articleParagraph}><b> « Quelle pub envoyer à un client afin de maximiser les chances qu’elle l’intéresse ? »</b></p>
	          <p style={articleParagraph}>Ayant accès aux historiques des achats de mes clients, nous pouvons donc développer et entraîner un 
	          système basé sur du Machine Learning.
			  Notre système nous permettra alors de proposer la pub avec le plus haut taux de conversion.</p>
			  <p>Ces systèmes sont aujourd’hui extrêmement courants et utilisés pour la publicité par mail ou sur internet. Cependant que se passe-t-il 
			  le jour où la totalité de l’historique des achats de notre client provient d’offres d’un système de Machine Learning ?
			  Le Machine Learning propose un choix optimal au détriment de la diversité, or il a besoin d’une diversité d’information pour 
			  faire ce choix. Le Machine Learning compromet donc sa source d'information.
			  </p>
			  <h6 style={articleSubTitle}>Trouver le bon équilibre :</h6>
			  <p style={articleParagraph}>Certains d'entre vous se sont sûrement retrouvés dans une situation où la page d’accueil YouTube 
			  ne vous propose que des vidéos provenant d’une même chaîne. Ce résultat était d’ailleurs sûrement dû à un visionnage conséquent 
			  de vidéos de cette même chaîne perturbant alors fortement les résultats de l’algorithme de suggestion.
			  </p>
			  <p style={articleParagraph}>Bon fort heureusement pour la plupart des utilisations du Machine Learning telle que la reconnaissance de 
			  chat dans une image (on en parlera prochainement) ce genre de phénomène n’intervient pas. En réalité les IAs les plus menacés sont celles 
			  de streaming vidéo/musical et de ciblage publicitaire. Et même pour celles-ci, des solutions sont déjà en cours d’élaboration. 
			  Avec principalement l’ajout d'un facteur aléatoire permettant de maintenir la diversité en acceptant de réduire légèrement l’efficacité 
			  de sa sélection.</p>
			  <h6 style={articleSubTitle}>Arthur Vervaet</h6>
	         </div>
	     </div>
    	);
      }
    }

export class Article4 extends Component {
  render() {
    return(
    	<div style={articleWrapper}>
	        <div style={articleContainer}>
	          <h1 style={articleTitle}>Que voient les robots ?</h1>
	          <p style={articleParagraph}>
		          <i>Dans le dernier article, j'avais abordé les robots reconnaissant des chats dans une image, il est désormais temps de voir
		           comment. Ce sera aussi une excellente occasion de se pencher sur notre propre vision et ses limites.
		          </i>
	          </p>
	          <h6 style={articleSubTitle}>Une histoire de capteur :</h6>
	          <p style={articleParagraph}>Avec l'arrivée de la voiture autonome la maîtrise du traitement d'images et de la computer vision 
	          ( science permettant aux ordinateurs de reconnaître des objets) est devenu un enjeu majeur. Afin de traiter rapidement le flux 
	          d'images transmises par ses capteurs (caméras) les robots n'analysent pas toute l'image mais se contentent de chercher la 
	          présence de patterns (morceaux) .
		      Si notre ordinateur recoupe beaucoup d'éléments à un endroit (queue, moustache, yeux) il va en déduire que quelque chose se 
		      trouve dans la zone et faire appel à son intelligence (réseau de neurones) afin de savoir ce que c'est, un chat par exemple.
			  Cependant dans certains cas nous sommes face à des éléments présentant un grand nombre de patterns communs et il devient plus 
			  difficile de discerner précisément ce que c'est.
		      </p>
	          <h6 style={articleSubTitle}>Pour les humains ? :</h6>
	          <p style={articleParagraph}>Mettons que nous sommes le gérant d’une grande marque de vêtements et l’on souhaite résoudre le problème suivant :</p>
	          <p style={articleParagraph}><b> « Quelle pub envoyer à un client afin de maximiser les chances qu’elle l’intéresse ? »</b></p>
	          <p style={articleParagraph}>Il se trouve que notre cerveau fonctionne exactement pareil, il ne traite qu'une partie de 
	          l'information de nos yeux et reconstitue une image afin que notre vision paraisse fluide. Et c'est pour cela que nous somme 
	          soumis à de nombreuses hallucinations visuelles. 
			  Je vous en fais ici partager plusieurs assez marquantes :</p>
			  <p>Cette dernière a priori anodine devient en réalité de pire en pire plus on la regarde.
				Elle illustre parfaitement le travail de notre cerveau qui dans un premier temps reconstruit une image qu'il juge normale. 
				Les anomalies ne commencent à apparaître que si l'on regarde plus précisément l'image.
			  </p>
			  <h6 style={articleSubTitle}>Arthur Vervaet</h6>
	         </div>
	     </div>
    	);
      }
    }


export class Article5 extends Component {
  render() {
    return(
    	<div style={articleWrapper}>
	        <div style={articleContainer}>
	          <h1 style={articleTitle}>Intelligence et apprentissage</h1>
	          <p style={articleParagraph}>
		          <i>En essayant de doter les machines d'intelligence, nous venons toucher profondément dans notre identité. La capacité de réflexion est un attribut propre à l'homme. 
		          Notre conscience de nous-mêmes nous 
		          distinguant des autres animaux. Mais si jamais nous arrivions à créer une machine avec des facultés supérieures aux nôtres que se passerait-t-il?
					Cet article est une bonne occasion d'essayer de voir ce que nous appelons intelligence. Mais également  de découvrir le fonctionnement des 
					réseaux de neurones artificiels, algorithmes visant à imiter la plasticité du cerveau humain.
		          </i>
	          </p>
	          <h6 style={articleSubTitle}>Une bonne base :</h6>
	          <p style={articleParagraph}>Donner une définition  précise de l'intelligence est une tâche ardue. Cependant  la définition ci-dessous me semble 
	          une  base solide pour notre réflexion.
		      </p>
		      <b>Définition : </b>
		      <p style={articleParagraph}> L'intelligence est l'ensemble des processus retrouvés dans des systèmes, plus ou moins complexes, vivants ou non, qui 
		      permettent de comprendre, d'apprendre ou de s'adapter à des situations nouvelles.</p>
	          <h6 style={articleSubTitle}>Plasticité et apprentissage</h6>
	          <p style={articleParagraph}>Une des capacités les plus intéressantes de notre cerveau est sa plasticité, cette capacité de notre cerveau à remodeler ses connexions en fonction des expériences vécues. 
	          Ce procédé est au cœur de notre apprentissage: les expériences que nous faisons et leur résultat modèlent littéralement notre cerveau.</p>
	          <h6 style={articleSubTitle}>Une histoire de neurones </h6>
	          
			  <h6 style={articleSubTitle}>Arthur Vervaet</h6>
	         </div>
	     </div>
    	);
      }
    }