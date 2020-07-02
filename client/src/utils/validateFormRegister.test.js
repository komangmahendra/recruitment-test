import validateForm, {
  validateEmail,
  validateMobileNumber,
} from "./validateFormRegister";

describe("email validation", () => {
  test("email with valid format", () => {
    const isEmailValid = validateEmail("mail@mail.com");
    expect(isEmailValid).toBe(true);
  });

  test("email not valid", () => {
    const isEmailValid = validateEmail("hehehe");
    expect(isEmailValid).toBe(false);
  });
});

describe("validate Mobile Number", () => {
  test("number with valid format", () => {
    const isNumberValid = validateMobileNumber("082247368506");
    expect(isNumberValid).toBe(true);
  });

  test("number not valid", () => {
    const isNumberValid = validateMobileNumber("hehehe");
    expect(isNumberValid).toBe(false);
  });
});

describe("validate form register", () => {
  test("valid all input", () => {
    const data = {
      email: "mail@mail.com",
      mobileNumber: "082247368506",
      firstName: "test",
      lastName: "test",
    };
    const errorMessage = validateForm(data);
    expect(errorMessage).toBe(null);
  });

  test("phone number not valid", () => {
    const data = {
      email: "mail@mail.com",
      mobileNumber: "hehehe",
      firstName: "test",
      lastName: "test",
    };

    const result = validateForm(data);
    expect(result).toBe("Please enter valid Indonesia phone number");
  });

  test("email not valid", () => {
    const data = {
      email: "hehehe",
      mobileNumber: "082247368506",
      firstName: "test",
      lastName: "test",
    };

    const result = validateForm(data);
    expect(result).toBe("Please enter valid email address");
  });

  test("first name not filled", () => {
    const data = {
      email: "mail@mail.com",
      mobileNumber: "082247368506",
      firstName: "",
      lastName: "test",
    };

    const result = validateForm(data);
    expect(result).toBe("Please enter valid first name");
  });

  test("test email not filled", () => {
    const data = {
      email: "mail@mail.com",
      mobileNumber: "082247368506",
      firstName: "test",
      lastName: "",
    };

    const result = validateForm(data);
    expect(result).toBe("Please enter valid last name");
  });
});
