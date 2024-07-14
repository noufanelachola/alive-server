// const sendMail = (req,res) => {
//     const nodemailer = require("nodemailer");

const SMTPTransport = require("nodemailer/lib/smtp-transport");

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: '23gcs16@meaec.edu.in',
//           pass: '6282519767'
//         }
//     });

//     const mailOptions = {
//         from : "23gcs16@meaec.edu.in",
//         to : "noufansadiqelachola@gmail.com",
//         subject : "Test email",
//         text : "Wish you read the mail"
//     };
//     function sendTestMail() {
//         transporter.sendMail(mailOptions,(error,info) => {
//             if(error) {
//                 console.log(error)
//                 res.status(400).json("Error occured");
//             } else {
//                 res.json('Email sent: ' + info.response);
//             }
//         })
//     }


//     sendTestMail()

// }

const sendMail = (req,res) => {
    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'judy57@ethereal.email',
            pass: 'PdZh1NTYXZdJyHk3mX'
        }
    });

    async function send() {
        const info = await transporter.sendMail({
            from: '"Judy Ethereal 👻" <judy57@ethereal.email>', // sender address
            to: "noufanselachola@gmail.com", // list of receivers
            subject: "Test email", // Subject line
            text: "Wish you read the mail", // plain text body
            html: "<b>Wish you read the mail</b>" // html body
          });
          console.log(info)
          res.json(info)
    }
    

    send().catch(error=>{
        console.log(error);
        res.status(400).json("Error occuredd")
    })

}

module.exports = {
    sendMail
}