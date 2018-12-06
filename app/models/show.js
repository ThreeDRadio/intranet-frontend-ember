import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({

  name: attr('string'),
  defaultHost: attr('string'),
  startTime: attr('string'),
  endTime: attr('string'),
  notes: attr('string'),
  customQuotas: attr('boolean'),
  femaleQuota: attr('number'),
  localQuota: attr('number'),
  australianQuota: attr('number'),
  playlists: hasMany('playlist'),
  topartists: hasMany('topArtist'),
  statistics: hasMany('statistic')
});
