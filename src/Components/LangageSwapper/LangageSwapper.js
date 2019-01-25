import React from 'react';
import './LangageSwapper.css'
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <div className="LangageSwapper">
	  <ul className="selector">
	    {languages.map(lang => (
	      <li key={lang.code}>
	        <span onClick={() => setActiveLanguage(lang.code)}>
	        	<img className="lang-icon" src={'/Ressource/img/' + lang.code +'.webp'} alt={lang.code}/>
	        </span>
	      </li>
	    ))}
	  </ul>
  </div>
);

export default withLocalize(LanguageToggle);