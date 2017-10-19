var React = require('react');
var createReactClass = require('create-react-class');
var AppStore = require('./stores/AppStores');
//var AppAction = require('./actions/AppActions');

var getAppState = function(){
    return null;
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

    },
    render: function() {
    return (
      <div className="App">
          <h1 className="text-center page-header">WorkoutLogger</h1>
          <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
          <br/>
          FORM
          <br/>
          WORKOUTS
          <br/>
      </div>
    );
  }
});

module.exports = App;
