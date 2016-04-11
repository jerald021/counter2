Counters = new Mongo.Collection('counters');

Counters.allow({
    update: function () {
        return true;
    }
});

Meteor.methods({
    changeValue: function(idActual, newValue){
        Counters.update(idActual, {$inc: {value: newValue} });
    },
    resetValue: function(idActual){
        Counters.update(idActual, {$set: {value: 0} });
    }
});