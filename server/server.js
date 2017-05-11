var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var nodefs = require('fs');
var hapi = require('hapi');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get('/registration', function (req, res){
	res.sendFile(__dirname + '/index.html');
});


/*app.post('/', function (req, res) {
	res.sendFile(__dirname + '/views');
});*/



app.set('views', './views');
app.set('view engine', 'jade');

app.post('/auth', function (req, res) {
	res.render('auth', {user: req.body});
});

app.listen(3000, function () {
	console.log("PORT 3000");
});


// Hapi
'use strict';

//on créait un serveur avec un host et un post
var server =  new Hapi.server();
server.connection ({
	host: 'localhost',
	port: 3300,
});

//on créait une route
server.route ({
	method: 'POST',
	path: '/auth',
	handler: function (request, reply) {
		return reply('server OK');
	}
});

//on lance le serveur
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

//on ajoute du contenu static
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'POST',
        path: '/auth',
        handler: function (request, reply) {
            reply.file('/');
        }
    });
});

