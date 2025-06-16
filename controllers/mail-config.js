const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaisarsaqif@gmail.com', // Your email
    pass: 'ayijsbuftvopndmp',   // Your email password or an app-specific password
  },
});

module.exports = transporter;
