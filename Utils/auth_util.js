const isEmailValidator = ({ str }) => {
  const isEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      str
    );
  return isEmail;
};

const userDataValidation = ({ name, email, message }) => {
  return new Promise((resolve, reject) => {
    if (!name || !email || !message) reject("Missing user data");

    if (typeof name !== "string") reject("name is not a text");
    if (typeof message !== "string") reject("message is not a text");
    if (typeof email !== "string") reject("email is not a text");

    if (name.length < 3 || name.length > 50)
      reject("name length should be 3-50 chars");
    if (!isEmailValidator({ str: email })) reject("Email format is incorrect");

    resolve();
  });
};

module.exports = { userDataValidation, isEmailValidator };
