var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute	= Router.IndexRoute;

import SearchRecipe from '../components/new.jsx'
import Plans from '../components/plans.jsx'
var Search = require('../components/Search'); 
var Saved = require('../components/Saved'); 


module.exports = (

	<Route path='/' component={SearchRecipe}>

		
		<Route path='Profile' component={Plans} />
		<Route path='Saved' component={Saved} />


		<IndexRoute component={Search} />

	</Route>


);