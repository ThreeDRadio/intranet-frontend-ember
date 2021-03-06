/* eslint-env node */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'threedradio-intranet-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    //ENV.APP.LOG_TRANSITIONS = true;
    //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    //ENV.APP.API_HOST = 'http://192.168.1.64:8000';
    ENV.APP.API_HOST = 'http://localhost:8000';
    ENV.backendBaseURL = 'http://localhost:8000/logger/';
    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: 'http://localhost:8000/auth/',
      crossOriginWhitelist: ['http://localhost:8000']
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.API_HOST = 'http://192.168.1.64:8000';
  }

  if (environment === 'production') {

    ENV.APP.API_HOST = 'https://intranet.threedradio.com/backend';
    ENV.backendBaseURL = 'https://intranet.threedradio.com/backend/logger/';
    ENV.rootURL = '/logger/',
    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: 'https://intranet.threedradio.com/backend/auth/',
    };
  }

  return ENV;
};
