/*Import dependencies*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const URI = "mongodb+srv://plemdbtester:SocialPlem2910@plemdb.md2xe.mongodb.net/PlemDB?retryWrites=true&w=majority";

const app = express();

const port = process.env.PORT || 5000;

/*Connect to mongodb database*/
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

/*Ensure mongoose connection was established*/
connection.once('open', function() {
  console.log('Connection with MongoDB was successful.');
});

app.use((request, response, next) => {
  try {
    console.log(`Request Endpoint: ${request.method} ${request.url}`);
    next();
  } catch (error) {
    next(error);
  }
});

app.use(express.json({extended: false}));

/*Set up middleware*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/*Import router */
const api = require('./routes/routes.js');
app.use("*", api);


/*Inform express app to serve compiled files*/
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', function (request, response) {
//     response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

/*--------------------------------GET REQUESTS----------------------------*/


// app.get('*', function(request, response) {
//   response.status(200).json({message: 'Catching all request'});
// });

app.get('/test', function(request, response) {
  response.status(200).json({message: 'Test is received'});
});

/*Set up server to listen in on port*/
app.listen(port, () => {console.log( `BACK_END_SERVICE_PORT: ${port}`)});