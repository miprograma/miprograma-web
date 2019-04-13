import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>, document.getElementById('root'));


serviceWorker.unregister();
