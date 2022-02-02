const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hiteshmarwaha24@gmail.com',
        pass: 'colypbuqzlxowvic',
      },
    });

    let mailOptions = {
      from: 'hiteshmarwaha24@gmail.com',
      to: email,
      subject: subject,
      text: text,
      // attachments: [
      //     { filename: 'images/profile.JPG', path: './images/profile.JPG' }
      // ]
    };

    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log('Email sent!!!');
    });
  } catch (error) {
    console.log('email not sent');
    console.log(error);
  }

  //   await transporter.sendMail({
  //     from: process.env.USER,
  //     to: email,
  //     subject: subject,
  //     text: text,
  //   });
  //   console.log("email sent sucessfully");
  // } catch (error) {
  //   console.log("email not sent");
  //   console.log(error);
  // }
};

module.exports = sendEmail;
