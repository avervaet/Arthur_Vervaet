import React, { Component } from 'react';
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
        { code: "en", flag:"gb.svg"},
        { code: "fr", flag:"fr.svg"}
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }

  render() {
    return (
        <div className="App">
            <Landing />
            <Projects />
            <TimeLine />
        </div>
    );
  }
}

export default withLocalize(Main);
