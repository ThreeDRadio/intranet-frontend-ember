import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';


export default Model.extend({

  show: belongsTo('show'),
  showname: attr('string'),
  host: attr('string'),
  date: attr('string'),
  notes: attr('string'),
  complete: attr('boolean', {
    defaultValue: false
  }),
  femaleQuota: attr('number'),
  localQuota: attr('number'),
  australianQuota: attr('number'),
  tracks: hasMany('playlistentry', {
    inverse: 'playlist'
  })

});
