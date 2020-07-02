import axios from "axios";
import { render, fireEvent, waitFor } from "@testing-library/vue";

// components
import Register from "./Register.vue";

jest.mock("axios");

// NOTE:
// state not change even fireEvent success change the field
// so for now cannot test to show login button on footer

describe("test register component", () => {
  const setup = () => {
    const utils = render(Register, {});
    return utils;
  };

  test("component render properly", () => {
    const { getByTestId, getByText } = setup();
    expect(getByTestId("register-wrapper")).toBeTruthy();
    expect(getByText("Registration")).toBeTruthy();
  });

  test("fill mobile number field", () => {
    const { getByTestId } = setup();

    const field = getByTestId("mobile-phone-field");
    fireEvent.change(field, { target: { value: "082247368506" } });
    expect(field.value).toBe("082247368506");
  });

  test("fill mobile number field", () => {
    const { getByTestId } = setup();

    const field = getByTestId("mobile-phone-field");
    fireEvent.change(field, { target: { value: "082247368506" } });
    expect(field.value).toBe("082247368506");
  });

  test("fill first name field", () => {
    const { getByTestId } = setup();

    const field = getByTestId("first-name-field");
    fireEvent.change(field, { target: { value: "test" } });
    expect(field.value).toBe("test");
  });

  test("fill last name field", () => {
    const { getByTestId } = setup();

    const field = getByTestId("last-name-field");
    fireEvent.change(field, { target: { value: "test" } });
    expect(field.value).toBe("test");
  });

  test("fill email field", () => {
    const { getByTestId } = setup();

    const field = getByTestId("email-field");
    fireEvent.change(field, { target: { value: "test@mail.com" } });
    expect(field.value).toBe("test@mail.com");
  });

  test("showing error tooltip, with empty form", async () => {
    const { getByTestId, getByText } = setup();

    const button = getByText("Register");

    fireEvent.click(button);

    // wait until tooltip showing
    await waitFor(() =>
      expect(
        getByText(
          "Please enter valid Indonesia phone number, Please enter valid email address, Please enter valid first name, Please enter valid last name"
        )
      ).toBeTruthy()
    );

    const errorTooltip = getByTestId("error-tooltip");
    expect(errorTooltip).toBeTruthy();
  });

  test("not call axios when from is throw error when validate", () => {
    const { getByTestId } = setup();
    axios.post.mockImplementation(() => Promise.resolve());

    const button = getByTestId("register-button");

    fireEvent.click(button);
    expect(button).toBeTruthy();
    expect(axios).toBeCalledTimes(0);
  });
});
