import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory()

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
