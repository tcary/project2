// // Server.js - This file is the initial starting point for the Node/Express server.

// // Dependencies
// // =============================================================
// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// var db = require("./app/models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory to be served
// app.use(express.static("app/public"));

// // Routes
// // =============================================================
// require("./app/routes/apiRoutes.js")(app);

// // Here we introduce HTML routing to serve different HTML files
// require("./app/routes/htmlRoutes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// // app.listen(PORT, function () {
// //     console.log("App listening on PORT " + PORT);
// // });
// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });
// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
var express = require("express");
var db = require("./app/models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./app/routes/apiRoutes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({}).then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});