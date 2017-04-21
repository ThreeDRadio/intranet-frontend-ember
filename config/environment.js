/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'threedradio-intranet-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
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
        serverTokenEndpoint: 'http://localhost:8000/api-token-auth/',
        crossOriginWhitelist: ['http://localhost:8000']
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.backendBaseURL = 'http://localhost:8000/logger/';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.API_HOST = 'http://192.168.1.64:8000';
  }

  if (environment === 'production') {

  }

  return ENV;
};
