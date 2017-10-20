var React = require('react');
var createReactClass = require('create-react-class');
/*
var AppStore = require('./stores/AppStores');
var AppAction = require('./actions/AppActions');
var AddForm = require('./components/AddForm');
var Workouts =require('./components/workouts');
*/
var Workout = require('./workout');


var Workouts  = createReactClass ({

    render: function() {
        return (
            <ul className="list-group">
                {
                    this.props.workouts.map((res, i) => {
                        return <Workout workout={res} key={i} />
                    })
                }
            </ul>
        );
    }
});

module.exports = Workouts;
