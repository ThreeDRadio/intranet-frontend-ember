import Ember from 'ember';
import moment from 'moment';``

export function prettyDate(date/*, hash*/) {
    return moment(date).format('LL');
}

export default Ember.Helper.helper(prettyDate);
