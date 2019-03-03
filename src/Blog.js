import React, { Component } from 'react';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";
import BlogLanding from './Components/BlogLanding/BlogLanding'
class Blog extends Component {

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
            <BlogLanding />
        </div>
    );
  }
}

export default withLocalize(Blog);
