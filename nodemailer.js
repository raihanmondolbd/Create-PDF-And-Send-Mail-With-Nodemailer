const nodemailer = require("nodemailer");


var mail = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.rm.email",
    port: 465,
    secure: false,
    auth: {
      user: 'tnodemail3@gmail.com',
      pass: 'nodemailer07@'
    }
  });

var timestamp = Date.now()
var date = new Date(timestamp);
console.log(date)
   
  var mailOptions = {
     from: 'tnodemail3@gmail.com',
     to: 'rm.qups@gmail.com',
     subject: 'Sending Email using Node.js',
     html: `<h1>Hi, This is update allure Report</h1><p>${date}</p>`,
     attachments: [{
         filename: date +'Allure Report.pdf',
         content: 'Allure Report',
         path: 'Allure Report.pdf'
     }]
  }
   
  mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
  });
