var express = require('express');
var app = express();

app.listen(3000);




app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
})


app.post('/registration', function (req, res) {
	res.send("yop");
})

app.use(express.static('form-facebook'));

