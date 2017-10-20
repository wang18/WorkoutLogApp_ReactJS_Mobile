var AppAction = require('../actions/AppActions');

var AppAPI = {
    addWorkout: function (workout) {
        console.log('Save workout...');
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        workouts.push(workout);
        localStorage.setItem('workouts',JSON.stringify(workouts));
    },
    getWorkouts: function () {
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        AppAction.receiveWorkouts(workouts);
    },
    removeWorkout: function (workoutId) {
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        for(var i=0;i<workouts.lengthadjust;i++){
            if(workouts[i].id == workoutId){
                workouts.splice(i, 1);
            }
        }
        localStorage.setItem('workouts',JSON.stringify(workouts));
    }
};

module.exports = AppAPI;
