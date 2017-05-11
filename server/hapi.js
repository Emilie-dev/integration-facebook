'use strict';

const Hapi = require('hapi');
var validator = require('validator');
validator.isEmail('foo@bar.com');

const server = new Hapi.Server();
server.connection({ port: 3300, host: 'localhost' });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('server OK');
});

server.register(require('inert'), (err) => {
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '../'
        }
    }
});
});
