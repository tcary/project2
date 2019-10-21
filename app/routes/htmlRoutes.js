// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    // form route loads the form.html page,
    // where users can enter their info (new volunteer) to the db
    app.get("/form", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/form.html"));
    });

    // calendar route loads the calendar.html page
    app.get("/calendar", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/calendar.html"));
    });

};
