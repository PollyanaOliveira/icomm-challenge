import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Provider from './store/Provider';
import Context from './store/Context';
import './index.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Provider store={Context}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
