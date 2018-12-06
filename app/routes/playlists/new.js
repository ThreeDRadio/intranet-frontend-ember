import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('show', {
      active: true
    }).then(res => res.filter(show => show.active));
  },
});
