import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createPlaylist(show, host, date, notes) {

      let record = this.store.createRecord('playlist', {
        show: show,
        host: host,
        date: date,
        notes: notes,
        showname: '',
        femaleQuota: 0,
        australianQuota: 0,
        localQuota: 0
      });
      var self = this;
      record.save().then(function (savedVersion) {
        self.transitionToRoute('playlists.edit', savedVersion);
      });
    }
  }
});
