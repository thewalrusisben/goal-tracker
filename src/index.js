import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* Imports related to Material UI Theme + Functionality */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const history = createHistory()

ReactDOM.render(<Router history={history}><MuiThemeProvider><App /></MuiThemeProvider></Router>, document.getElementById('root'));
registerServiceWorker();
