import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a6828839454faa",
      pass: "53f083f708805a"
    }
  });


  const mailer = async (params) => {
    const { from, to, subject, text } = params;
    const info = await transporter.sendMail({
      from: from, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    //   html: `<b>${text}</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  };

export default mailer 
