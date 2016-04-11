Router.configure({
   layoutTemplate: 'layout',
   waitOn: function() {
      return Meteor.subscribe('counters');
   }
});

Router.route('/', {
   name: 'counter'
});