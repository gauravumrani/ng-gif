// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/*app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');*/
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '82';
app.set('port', port);

/**
 * Create HTTP server.
 */
//const server = http.createServer(app);
app.listen(port,()=>{
	console.log(`Site running on localhost:${port}`)
});
/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));
