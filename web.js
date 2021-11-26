#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('tmc:server');
var http = require('http');
const https = require('https');
var path = require('path');
const fs = require('fs');
const dbConfig = require('./config/dbConfig.json'); 


/**
 * Get port from environment and store in Express.
 */
const mongoose = require ("mongoose") ;
const db = mongoose.connection; 
db.on('error' ,console.error) ;
db.once('open',()=>{
  console.log("🥰 Connected to mongodb server!");
})

mongoose.connect(
  `mongodb+srv://admin:${dbConfig.pw}@cluster0.f8sbz.mongodb.net/${dbConfig.name}?retryWrites=true&w=majority`,
)
var port = normalizePort(process.env.PORT || '8001');
app.set('port', port);

/**
 * Create HTTP server.
 */

 var server = http.createServer(app);
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);

 const options = {
   key: fs.readFileSync(__dirname +'/config/ssl.key.pem'), 
   cert: fs.readFileSync(__dirname +'/config/tmclounge.com_202111247DE04.crt.pem'),
   ca: fs.readFileSync(__dirname + '/config/ca-chain-bundle.pem'), 
   minVersion: "TLSv1.2"
 };

 var httpsServer = https.createServer(options,app);

/**
 * Listen on provided port, on all network interfaces.
 */
  httpsServer.listen(8443);
  httpsServer.on('error', onError);
  httpsServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
