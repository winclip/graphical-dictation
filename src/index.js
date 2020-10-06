import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './components/navigationRow';
// import store from './components/config/store';
import Game from './components/game/game';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import audioStore from './audioStore';
import ChooseVariantPage from "./pages/ChooseVariantPage";

audioStore.initAudio();

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route exact path="/choose-variant/:level" component={ChooseVariantPage} />
        <Route exact path="/game/:level/:id" component={Game} />
        <Redirect to="/" />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
