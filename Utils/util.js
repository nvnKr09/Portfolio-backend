const { error } = require("console");
const nodemailer = require("nodemailer");

const sendMail = (name, email) => {
  const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  // mail options
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "Thank You for Contacting",
    html: `
        <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Thank you</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style type="text/css">
      a[x-apple-data-detectors] {
        color: inherit !important;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
    >
      <tr>
        <td style="padding: 20px 0 30px 0">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            style="border-collapse: collapse; border: 1px solid #cccccc"
          >
            <tr>
              <td
                align="center"
                bgcolor="#defcf9"
                style="padding: 40px 0 30px 0"
              >
                <img
                  src="https://www.jotform.com/blog/wp-content/uploads/2020/01/email-marketing-intro-02-700x544.png"
                  alt="logo"
                  width="300"
                  height="230"
                  style="display: block"
                />
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td style="color: #00adb5; font-family: Arial, sans-serif">
                      <h3
                        style="
                          font-size: 24px;
                          margin: 0;
                          margin-bottom: 6px;
                          text-align: center;
                          font-family: Montserrat, sans-serif;
                        "
                      >
                        Hey ${name}
                      </h3>
                      
                      <p style="color: rgb(12, 12, 60)">
                        
                        Thank you for reaching out to me through my portfolio
                        website. I appreciate you getting in touch! I've
                        received your message and will be reviewing it shortly.
                        <br />
                        <br />
                        In the meantime, feel free to browse my portfolio for a
                        closer look at my work.
                        <br />
                        <br />
                        We can also connect on
                        <span
                          style="font-weight: 700;"
                          >LinkedIn</span
                        >
                        You can find my profile
                        <a
                          href="https://www.linkedin.com/in/naveen-kr09/"
                          target="_blank"
                          style="color: rgb(0, 47, 255)"
                          >Here</a
                        >
                        <br />
                        <br />
                        Thank you again for your interest!
                        <br>
                        <br>
                        Sincerely, 
                        <br>
                        <span style="font-weight: bold;">Naveen kumar</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        color: #153643;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 24px;
                        padding: 20px 0 30px 0;
                      "
                    ></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ef7e5c" style="padding: 30px 30px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td
                      style="
                        color: #ffffff;
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <p style="margin: 0">
                        &copy; copyright 2024<br />
                        <a href="" style="color: #ffffff">Subscribe</a> to us!
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
    `,
  };

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
    }else{
      console.log("Email sent: " + info.response);
    }
  })
};

module.exports = sendMail;