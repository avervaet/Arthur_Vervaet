import React, { Component } from 'react';
import './Main.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import TimeLine from './Components/TimeLine/TimeLine';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";

class Main extends Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { code: "en", flag:"gb.svg" },
        { code: "fr", flag:"fr.svg" },
        { code: "esp", flag: "esp.svg"}
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <TopMenu />
          </header>
            <Landing />
            <Projects />
            <TimeLine />
        </div>
    );
  }
}

export default withLocalize(Main);
