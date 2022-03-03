const express = require('express');
const sendEmailController = require('./controllers/sendEmailsController');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Sending Emails </h1><a href="/send">Send email</a>');
});

app.get('/send', sendEmailController.sendEmail);


app.listen(3000, ()=> {
    console.log('Server is running.');
});