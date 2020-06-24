import React from 'react';
import ReactDOM from 'react-dom';
// import * as Sentry from '@sentry/browser';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from './services/logService';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Sentry.init({dsn: "https://c5342e6af6404c01803c447b53193022@o411993.ingest.sentry.io/5288046"});

logger.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
