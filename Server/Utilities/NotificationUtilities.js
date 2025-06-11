import nodemailer from "nodemailer";
const sendEmail = (email, subject, html) => {
  const emailId = email.join(" ,");
  //   console.log(email);
  //   console.log(subject);
  //   console.log(html);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  let mailDetails = {
    from: process.env.EMAIL_USER,
    to: emailId,
    subject: subject,
    html: html,
  };
  transporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      console.log("Unable to send email", err);
    } else {
      console.log(`Email sent sucessfully to: ${emailId}`);
    }
  });
};

//zyml sgtd snbn mjnd
export default sendEmail;
