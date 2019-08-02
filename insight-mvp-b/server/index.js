/**
 * Nominally the entry point for our backend via script execution according to "npm run watch:server" 
 * or "npm run start:server", but functionally the last part of the backend code to run.  app.listen()
 * is run after everything in ./app's backend logic is executed.
 * 
 * This file (index.js) contains nothing more than the connection logic to view the server-fed content
 * from the specified port.
 */ 

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}!`);
})
app.on('error', onError);

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