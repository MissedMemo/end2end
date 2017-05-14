const express = require('express');
const app = express();

app.use( express.static( __dirname + '/public' ) );

const port = process.env.PORT || 8080;

app.listen( port, function() {
  console.log('listening on port #%s', port );
}); 