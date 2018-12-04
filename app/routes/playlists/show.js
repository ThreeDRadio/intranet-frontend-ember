import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('show', params.show_id, {
      reload: true
    });
  },
});
