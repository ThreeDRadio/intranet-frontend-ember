import Ember from 'ember';

export function prettyDate(date/*, hash*/) {
    return moment(date).format('LL');
}

export default Ember.Helper.helper(prettyDate);
