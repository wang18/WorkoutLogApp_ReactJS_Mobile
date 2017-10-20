var React = require('react');
var createReactClass = require('create-react-class');
var AppStore = require('./stores/AppStores');
var AppAction = require('./actions/AppActions');
var AddForm = require('./components/AddForm');
var Workouts =require('./components/workouts');

var getAppState = function(){
    return {
        showForm: AppStore.getShowForm(),
        workouts: AppStore.getWorkouts()
    };
}

var App  = createReactClass ({
    getInitialState: function(){
        return getAppState();
    },
    componentDidMount: function () {
      AppStore.addChangeListener(this._onChange);
    },
    componentUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange:function () {
      this.setState(getAppState()) ;
    },
    onShowFormClick: function (e) {
        e.preventDefault();
        AppAction.showForm();
    },
    render: function() {
        if(this.state.showForm){
            console.log(this.state.workouts);
            var form = <AddForm />;
        }else{
            var form = '';
        }
        return (
          <div className="App">
              <h1 className="text-center page-header">WorkoutLogger</h1>
              <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
              <br/>
              {form}
              <br/>
              <Workouts workouts={this.state.workouts} />
              <br/>
          </div>
        );
  }
});

module.exports = App;
