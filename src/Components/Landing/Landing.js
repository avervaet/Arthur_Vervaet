import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

class Landing extends Component {
  render() {
    //Component styling
    const landingStyle = {
      //backgroundColor: '#f0f0f0'
      backgroundColor: 'lightblue',
      padding: '0 15px'
    };

    const landingContentStyle = {
      height: 'fit-content',
      width: '100%',
      padding: '70px 0px 30px',
      margin: '0 auto'
    };

    const landingCardStyle = {
      display: 'inline-block',
      verticalAlign: 'middle', 
      marginRight: '2%'
    };

    const profilePictureStyle = {
      maxHeight: '500px',
      maxWidth: '90%',
      marginBottom: '20px'
    };

    const nameStyle = {
      width: 'fit-content',
      backgroundColor: 'white',
      margin: '0 auto',
      boxShadow: '-5px 10px 50px #212529',
      marginTop: '-15px',
      padding: '7px 40px',
      fontSize: '1.5rem'
    };

    const profileInfoStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      backgroundColor: '  #343a40',
      borderRadius: '10px',
      border: '2px solid white',
      padding: '30px',
      marginTop: '25px',
      marginLeft: '2%',
      maringBottom: '42px',
      boxShadow: 'rgb(33, 37, 41) -5px 10px 50px'
    };

    const jobTitleStyle = {
      color: 'white',
      fontFamily: "'Indie Flower', cursive",
      marginBottom: '20px'
    }

    const infoSectionStyle = {
      margin: '15px 0'
    }

    const sectionTileStyle = {
      textAlign: 'left',
      color: 'white',
      fontFamily: "'Indie Flower', cursive"
    };

    const logoRowStyle = {
      margin: '20px 0'
    };

    const logoStyle = {
      display: 'inline-block',
      height: '40px',
      width: '40px',
      margin:'0 10px',
      verticalAlign: 'top'
    };

    const verticalDividerStyle = {
      display: 'inline-block',
      width: '2px',
      backgroundColor: 'white',
      margin: '0 10px',
      height: '40px'
    }
    return(
        <section style={landingStyle}>
          <div style={landingContentStyle}>
            <div style={landingCardStyle}>
                <img style={profilePictureStyle} src='/Ressource/img/profile_picture.png' alt="Arthur Vervaet"/>
                <h1 style={nameStyle}><span>Arthur</span> VERVAET</h1>
            </div>
            <div style={profileInfoStyle}>
              <h2 style={jobTitleStyle  }><Translate id="landing.jobTitle"/></h2>
              <div style={infoSectionStyle}>
                <h4 style={sectionTileStyle}><Translate id="landing.stackTitle"/></h4>
                  <div style={logoRowStyle}>
                    <img style={logoStyle} src='/Ressource/img/stack/python.png' alt="Python"/>
                    <img style={logoStyle} src='/Ressource/img/stack/flask.png' alt="Flask"/>
                    <div style={verticalDividerStyle}></div>
                    <img style={logoStyle} src='/Ressource/img/stack/html5.png' alt="Html5"/>
                    <img style={logoStyle} src='/Ressource/img/stack/javascript.png' alt="Css3"/>
                    <img style={logoStyle} src='/Ressource/img/stack/css3.png' alt="Css3"/>
                    <div style={verticalDividerStyle}></div>
                    <img style={logoStyle} src='/Ressource/img/stack/react_logo.png' alt="React"/>
                  </div>
                </div>
              <div style={infoSectionStyle}>
                <h4 style={sectionTileStyle}><Translate id="landing.linkTitle" /></h4>
                <div style={logoRowStyle}>
                  <a href="https://github.com/avervaet"><img style={logoStyle} src='/Ressource/img/stack/github.png' alt="Github"/></a>
                  <div style={verticalDividerStyle}></div>
                  <a href='https://www.linkedin.com/in/arthur-vervaet/'><img style={logoStyle} src='/Ressource/img/stack/linkedin.jpg' alt="Linkedin"/></a> 
                </div>
              </div>
              <div style={infoSectionStyle}>
                <h4 style={sectionTileStyle}><Translate id="landing.resume" /></h4>
                <div style={logoRowStyle}>
                <form method="get" action='/Ressource/file/arthur_vervaet_resume__copy.pdf'>
                  <button class="btn" type="submit"><i class="fa fa-download"></i> Download</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
      }
    }

export default withLocalize(Landing);