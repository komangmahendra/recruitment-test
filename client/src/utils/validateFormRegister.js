export const validateEmail = (email) => {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  return re.test(String(email).toLowerCase());
};

export const validateMobileNumber = (mobileNumber) => {
  const re = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g;
  return re.test(mobileNumber);
};

export default (data) => {
  const { email, mobileNumber, firstName, lastName } = data;

  const errorMessages = [];

  const isEmailValid = validateEmail(email);
  const isMobileNumberValid = validateMobileNumber(mobileNumber);

  if (!isMobileNumberValid || !mobileNumber) {
    errorMessages.push(`Please enter valid Indonesia phone number`);
  }

  if (!isEmailValid || !email) {
    errorMessages.push(`Please enter valid email address`);
  }

  if (!firstName) {
    errorMessages.push(`Please enter valid first name`);
  }

  if (!lastName) {
    errorMessages.push(`Please enter valid last name`);
  }

  if (errorMessages.length) {
    return errorMessages.join(", ");
  }

  return null;
};
