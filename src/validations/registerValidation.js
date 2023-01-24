

const registerValidation = payload => {
  let errors = {};
  if (!payload.userName) {
    errors.name = "Name Required"
  }

  if (!payload.email) {
    errors.email = "Email Required";
  } else {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const emailValidCheck = emailRegExp.test(payload.email);
    if (emailValidCheck === false) {
      errors.email = "Please Enter Valid Email";
    }
  }

  if (!payload.phone) {
    errors.phone = "Phone Required"
    // } else {
    //   var myPhoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    //   const phoneValid = myPhoneRegex.test(payload.phone)
    //   if (phoneValid === false) {
    //     errors.phone = "Please enter valid phone"
    //   }
  }


  if (!payload.password) {
    errors.password = "Password Required";
  }
  return errors;
};

export default registerValidation;
