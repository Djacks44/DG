// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');


import SearchRecipe from './components/new.jsx'

ReactDOM.render(

	<div><SearchRecipe /></div>,
	document.getElementById('yellow')
	)


