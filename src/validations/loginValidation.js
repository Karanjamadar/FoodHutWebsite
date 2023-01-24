const loginValidation = payload => {
  let errors = {};
  if (!payload.email) {
    errors.email = "Email Required"
  } else {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const emailValidCheck = emailRegExp.test(payload.email);
    if (emailValidCheck === false) {
      errors.email = "Invalid Email";
    }
  }
  if (!payload.password) {
    errors.password = "Password Required"
  }
  return errors;
};

export default loginValidation;