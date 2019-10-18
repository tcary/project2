// create authentication using JWT already signed up for a token at https://manage.auth0.com/dashboard/us/dev-lm3ekcvs/apis
// have a window onload function that asks for user credentials ()
// show user the current calendar and the shifts coming up
// have user an ability to sign-up or withdraw from a shift/service
// have cards that would have a desription of the ministry
// some sort of an alert for a succesful signup
// also an alert that would notify of a shift coming up.


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
// Basic route that sends the user to the form Page
app.get("/api/form", function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});
// Basic route that sends the user to the calendar Page
app.get("/api/calendar", function (req, res) {
    res.sendFile(path.join(__dirname, "calendar.html"));
});
