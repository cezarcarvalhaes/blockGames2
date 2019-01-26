const express = require("express");

const mongoose = require("mongoose");
const routes = require("./backend/routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// mongoose.set('debug', function(coll, method, query, doc, options) {
//   let set = {
//       coll: coll,
//       method: method,
//       query: query,
//       doc: doc,
//       options: options
//   };

//   log.info({
//       dbQuery: set
//   });
// });
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blockGames" , function(err, db) {
  if (err) {
      console.log('Unable to connect to the server. Please start the server. Error:', err);
  } else {
      console.log('Connected to Server successfully!');
  }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});