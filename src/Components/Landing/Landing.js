import React, { Component } from 'react';
import './Landing.css';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

class Landing extends Component {
  render() {
    return(
        <section id="landing">
          <div className="landing-content">
            <div className="landing-card">
                <img className="landing-image" src='/Ressource/img/profile_picture.webp' alt="Arthur Vervaet"/>
                <h1 className="name"><span>Arthur</span> VERVAET</h1>
                <h2 className="quote"><Translate id="landing.sentence"/></h2>
            </div>
          </div>
        </section>
        );
      }
    }

export default withLocalize(Landing);