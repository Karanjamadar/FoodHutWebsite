

const registerValidation = payload => {
  let errors = {};
  if (!payload.userName) {
    errors.userName = "Please Enter Full Name"
  }

  if (!payload.email) {
    errors.email = "Please Enter Email Address";
  } else {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const emailValidCheck = emailRegExp.test(payload.email);
    if (emailValidCheck === false) {
      errors.email = "Please Enter Valid Email Address";
    }
  }

  if (!payload.phone) {
    errors.phone = "Please Enter your Phone Number"
    // } else {
    //   var myPhoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    //   const phoneValid = myPhoneRegex.test(payload.phone)
    //   if (phoneValid === false) {
    //     errors.phone = "Please enter valid phone"
    //   }
  }


  if (!payload.password) {
    errors.password = "Please Enter Password";
  }
  return errors;
};

export default registerValidation;
