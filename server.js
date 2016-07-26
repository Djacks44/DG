var express = require('express');
//
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/user.js');

var request = require('request');
var mongojs = require('mongojs');
var databaseUrl = 'mongodb://localhost/res';
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



//allow sessions
app.use(session({secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


//switch from momgo js to moongoose
// mongoose.connect('mongodb://localhost/nytreact');
// var db = mongoose.connection;

// db.on('error', function (err) {
// 	console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
// 	console.log('Mongoose connection successful.');
// });

var logic = require('./server/logic/logic')
var users_controller = require('./controller/users_controller');
app.use('/search',logic);
app.use('/users', users_controller);

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});




//
//
// app.get('/api/saved', function(req, res) {
//
// 	Article.find({})
// 		.exec(function(err, doc){
//
// 			if(err){
// 				console.log(err);
// 			}
// 			else {
// 				res.send(doc);
// 			}
// 		})
// });
//
//
app.post('/api/saved', function(req, res){
	console.log(req.body);
	var recipe1 = req.body.data
	console.log(req.body.data);
	var name = req.session.user_email

  			db.users.update({
			    'name': name
			  }, 
			  {
			    $push: {
			            'res': recipe1,
			    }
			  }, function(err, edited) {
			    if (err) {
			      console.log(err);

			    } else {
			      console.log(edited);
			    }
			  });

});

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
