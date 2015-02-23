import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var q = params.query;
    return Ember.$.getJSON('http://www.reddit.com/subreddits/search.json?q=' + q).then(function(results) {
      return results.data.children;
    });
  }
});
