var AppConstants = require("../constants/AppConstants");
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT='change';
var _showForm=false;
var _workout =[];

var AppStore=assign({},EventEmitter.prototype,{
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },
    showForm: function () {
        _showForm=true;
    },
    getShowForm: function(){
        return _showForm;
    },
    addWorkout: function (workout) {
        _workout.push(workout);
    },
    getWorkouts: function () {
        return _workout;
    },
    receiveWorkouts: function (workouts) {
        _workout=workouts;
    },
    removeWorkout: function (workoutId) {
        var index = _workout.findIndex(x => x.id === workoutId);
        _workout.splice(index,1);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case AppConstants.SHOW_FORM:
            AppStore.showForm();
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.ADD_WORKOUT:
            AppStore.addWorkout(action.workout);
            AppAPI.addWorkout(action.workout);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_WORKOUTS:
            AppStore.receiveWorkouts(action.workouts);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_WORKOUT:
            AppStore.removeWorkout(action.workoutId);
            AppAPI.removeWorkout(action.workoutId);
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;