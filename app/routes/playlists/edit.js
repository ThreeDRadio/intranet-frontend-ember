import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let record = this.store.findRecord('playlist', params.playlist_id, {
      reload: true
    });
    record.then(function (r) {
      r.get('tracks').reload();
    });
    return record;
  },
  queryParams: {
    page: {
      refreshModel: true
    }
  },

});
