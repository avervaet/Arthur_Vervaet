import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component {
  render() {
    return(
        <section id="landing">
          <div className="landing-content">
            <div className="landing-card">
                <img className="landing-image" src={window.location.origin + '/Ressource/img/profile_picture.png'} alt="Arthur Vervaet"/>
                <h1 className="name"><span>Arthur</span> VERVAET</h1>
                <h2 className="quote">A place to learn more about myself and my projects</h2>
            </div>
          </div>
        </section>
        );
      }
    }

export default Landing;