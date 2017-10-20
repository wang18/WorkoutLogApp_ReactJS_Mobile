var React = require('react');
var createReactClass = require('create-react-class');
var AppAction = require('../actions/AppActions');

var Workout  = createReactClass ({

    render: function() {
        if(this.props.workout.miles != ''){
            var miles = ' | '+this.props.workout.miles+ ' Miles';
        } else {
            var miles = '';
        }
        return (
            <li className="list-group-item">
                    {this.props.workout.type} - {this.props.workout.minutes} Minutes {miles} <a href="#" onClick={this.onDelete.bind(this, this.props.workout.id)} className="delete">X</a>

            </li>
        );
    },
    onDelete: function (i, j) {
        AppAction.removeWorkout(i);
    }
});

module.exports = Workout;
