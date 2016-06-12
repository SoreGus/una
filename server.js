#!/bin/env node

var app = require('./webservice/config/express.js')();

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.TZ = 'America/Sao_Paulo';

var server = app.listen(port, ipaddr);

// require('./webservice/config/socket-io.js')(server, app);

console.log("***** Servidor rodando: " + new Date().toISOString() + " *****");