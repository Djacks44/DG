var express = require('express');
//
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//
var logger = require('morgan');
// var mongoose = require('mongoose');
var Recipe = require('./models/user.js');

var request = require('request');
var mongojs = require('mongojs');
var databaseUrl = 'mongodb://heroku_1s58mqrh:dd2tj60b0ev8v1k914lasgslvr@ds145415.mlab.com:45415/heroku_1s58mqrh';
var collections = ["users"];



var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

var app = express();
var PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));



//allow session
app.use(session({secret: 'app', cookie: { maxAge: 60000000000000000000000}}));
app.use(cookieParser());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


var logic = require('./server/logic/logic')
var users_controller = require('./controller/users_controller');
app.use('/search',logic);
app.use('/users', users_controller);

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});
app.get('/about', function(req, res){
  res.sendFile(process.cwd()+'/public/views/contact.html');
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

app.post('/api/saved', function(req, res){
	console.log(req.body);
	var recipe = req.body
	console.log(req.body.data);
	var name1 = req.session.user_email
		//needs to be in an if statment db needs to insert if a new plan is chosen
		//title needs to come trough the route with object so we can define it here

	// var bog = {name: name1, title: "", res: []};

 //              db.users.insert(bog, function(err, found) {
	// 		      if (err) {
	// 		        console.log(err);
	// 		      } else {
	// 		      	console.log(found)
	// 		      	console.log('successfull')
	// 		      }
	// 		  });

//right now this just updates the first plan
//just put a variable for title to make it work

 // db.users.update({ name: email, "array._id": ID},{ "$push": {"array.$.res": { "name": "test name", "duration": "4.00"}}})


  			db.users.update({
			    'name': name1,
          "array._id": "Plan 1",
			  },
			  {
			    $push: 		{
			            "array.$.res": recipe,
			    			}
			  }, function(err, edited) {
			    if (err) {
			      console.log(err);

			    } else {
			      console.log(edited);
			    }
			  });

});

app.get('/api/show', function(req, res){
	  var name = req.session.user_email

      db.users.find({
        'name': name
    }, function(err, found){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(found);
            res.json(found);
        }
    });
});

// mongoose.connect('mongodb://localhost/testbigoven');
// var db = mongoose.connection;

// db.on('error', function (err) {
// 	console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
// 	console.log('Mongoose connection successful.');
// });

// app.post('/api/bigoven', function(req, res){
// 	var newRecipe = new Recipe(req.body);

// 	console.log(req.body)

// 	var title = req.body.title;
// 	var ingredients = req.body.ingredients;
// 	var instructions = req.body.instructions;
// 	var rating = req.body.rating;
// 	var date = req.body.date;


// 	newRecipe.save(function(err, doc){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			res.send(doc._id);
// 		}
// 	});
// });


//
// app.delete('/api/saved/', function(req, res){
//
// 	var url = req.param('url');
//
// 	Article.find({"url": url}).remove().exec(function(err, data){
// 		if(err){
// 			console.log(err);
// 		}
// 		else {
// 			res.send("Deleted");
// 		}
// 	});
// });

 //  db.users.insert({name: "djacks@udel.edu", array:[{_id: "Plan One", title:"Plan One", res: []}]})

 // db.users.update({ name: email, "array._id": ID},{ "$push": {"array.$.res": { "name": "test name", "duration": "4.00"}}})

 // db.users.update({ name: "djacks@udel.edu"},{ "$push": {array: {_id:"Plan Two", title:"Plan Two", res: []}}})
