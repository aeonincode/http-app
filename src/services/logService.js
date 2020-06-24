import Raven from 'raven-js';

function init() {
  Raven.config(
    'https://c5342e6af6404c01803c447b53193022@o411993.ingest.sentry.io/5288046',
    {
      release: '1-0-0',
      environment: 'development-test',
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
