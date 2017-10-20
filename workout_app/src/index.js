import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');
var startData = require('./startData');
var AppAPI = require('./utils/AppAPI');

if(localStorage.getItem('workouts')==null){
    startData.init();
}
AppAPI.getWorkouts();
ReactDOM.render(<App />, document.getElementById('app'));

