var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var nodefs = require('fs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get('/registration', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

/*app.post('/', function (req, res) {
	res.sendFile(__dirname + '/views');
});*/

//ajout de jade.js
app.set('views', './views');
app.set('view engine', 'jade');

app.post('/auth', function (req, res) {
	res.render('auth', {user: req.body});
});

app.listen(3000, function () {
	console.log("PORT 3000");
});
