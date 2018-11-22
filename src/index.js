import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";


const App = props => (
  <LocalizeProvider>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </LocalizeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
