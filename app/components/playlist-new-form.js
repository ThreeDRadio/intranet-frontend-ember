import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    Ember.$('#date-picker').datepicker({
      dateFormat: 'yy-mm-dd'
    });
    Ember.$('#date-picker-button').click(function () {
      Ember.$('#date-picker').focus();
    });
  },

  selectShow(value) {
    let show = this.model.findBy('id', value);
    if (show !== undefined) {
      this.set('host', show.get('defaultHost'));
      this.set('selectedShow', show);
    } else {
      this.set('host', '');
    }
  },

  createPlaylist() {

    if (this.get('selectedShow') !== undefined &&
      this.get('host') !== undefined && this.get('host') !== "" &&
      this.get('date') !== undefined && this.get('date') !== "") {

      this.get('createAction')(this.get('selectedShow'),
        this.get('host'),
        this.get('date'),
        this.getWithDefault('notes', ''), this.get('fillin'));

    } else {
      alert("no show");
    }
  },

  sortedProperties: ['name'],
  sortedShows: Ember.computed.sort('model', 'sortedProperties'),


});
