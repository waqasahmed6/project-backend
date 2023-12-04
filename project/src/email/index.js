import  nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a6828839454faa",
    pass: "53f083f708805a"
  }
});

async function main() {
  
  const info = await transporter.sendMail({
    from: "", 
    to: "", 
    subject: "Hello ", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId)
}
main()