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

'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
