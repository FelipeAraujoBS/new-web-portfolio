const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
// const password = require("./nodePass.js")
require('dotenv').config()

// server used to send emails
const app = express();
app.use(cors());
router.use(express.json());
app.use("/post", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Running"));

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "felipearaujobs@gmail.com",
    pass: "puwsonzvytinthob"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "felipearaujobs@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
