import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function() {
      var searchTerm = this.controllerFor('application').get('search');
      this.transitionTo('search', searchTerm);
    },
    find: function() {
      var subreddit = this.controllerFor('application').get('subsearch');
      this.transitionTo('subsearch', subreddit);
    }
  }
});
