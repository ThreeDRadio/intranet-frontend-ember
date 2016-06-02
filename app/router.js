import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playlists', function() {
    this.route('index', {path: '/'} );
    this.route('playlist', {path: '/:playlist_id' });
    this.route('edit', {path: '/:playlist_id/edit'});
  });
});

export default Router;
