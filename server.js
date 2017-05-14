const express = require('express');
const path = require('path');
const sass = require('node-sass-middleware');

const app = express();

// IMPORTANT: sass middleware must come BEFORE express.static!
app.use( sass({
  src: path.resolve('sass'),
  dest: path.resolve( 'public' )
}) );

app.use( express.static( 'public' ) );

const port = process.env.PORT || 8080;

app.listen( port, function() {
  console.log('listening on port #%s', port );
}); 
