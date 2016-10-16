import App from './components/App';
import history from './history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';

import 'babel-polyfill';
import './global.scss';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('content')
);
