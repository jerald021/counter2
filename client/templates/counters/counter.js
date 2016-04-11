Template.counter.helpers({
   counters: function(){
       return Counters.find();
   }
});

Template.counter.events({
    'click #inc': function () {
        var idActual = this._id;
        //console.log(idActual);
        //Counters.update(idActual, {$inc: {value: 1} });
        Meteor.call('changeValue', idActual, 1);
    },
    'click #dec': function () {
        var idActual = this._id;
        //console.log(idActual);
        //Counters.update(idActual, {$inc: {value: 1} });
        Meteor.call('changeValue', idActual, -1);
    },
    'click #reset': function () {
        var idActual = this._id;
        //console.log(idActual);
        //Counters.update(idActual, {$inc: {value: 1} });
        Meteor.call('resetValue', idActual);
    }
});