import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter basename="/miprograma-web">
    <App />
  </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
