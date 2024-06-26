const express = require("express");
const { userDataValidation } = require("./Utils/auth_util");
const cors = require('cors');
const sendMail = require("./Utils/util");
require('dotenv').config();

// constants
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); //data from form
app.use(express.json()); //data comes from axios fetch or postman

app.get('/', (req,res)=>{
  res.send("Server is up and running");
})

app.post("/contact", async (req, res) => {
  console.log(req.body);

  const {email, name, message} = req.body;

  //data validation
  try {
    await userDataValidation({ name, email, message });
  } catch (error) {
    return res.status(400).json(error);
  }

  // initialize ---> obj
  const userObj = {
    name,
    email,
    message,
  };

  // send mail to user
  sendMail(name, email, message);

  return res.status(201).json({
    message: "Form Submitted Successfully",
    data: userObj,
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is up and running at port : http://localhost:${PORT}`);
});
