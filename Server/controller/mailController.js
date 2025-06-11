import gunjanMessageScript from "../Scripts/gunjanMessageScript.js";
import userMessageScript from "../Scripts/userMessageScript.js";
import sendEmail from "../Utilities/NotificationUtilities.js";
import validator from "validator";
const sendMailer = (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(401).send({
      success: false,
      message: "Invalid data",
    });
  }
  if (!validator.isEmail(email)) {
    return res.status(401).send({
      success: false,
      message: "Invalid Email, Please Enter correct email and try again",
    });
  }
  sendEmail(
    [email],
    "Got Your Message Through My Portfolio",
    userMessageScript(name, email)
  );

  setTimeout(() => {
    sendEmail(
      [process.env.ADMIN],
      "You've Got a New Message via Your Portfolio",
      gunjanMessageScript(name, email, message)
    );
  }, 1000);

  return res.status(200).send({
    success: true,
    message: `Message sent successfully`,
  });
};
export { sendMailer };
