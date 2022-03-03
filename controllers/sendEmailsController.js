const nodemailer = require('nodemailer');

module.exports.sendEmail = async(req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jlxravzgnixca2qa@ethereal.email',
            pass: 'fx1xKsUz3qDHUuZBVS'
        }
    });

    let info = await transporter.sendMail({
        from: '"John Doe" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Test Subject", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

    res.send(info);
}