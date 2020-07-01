import { render, fireEvent } from "@testing-library/vue";
import Register from "./Register.vue";

describe("test register component", () => {
  test("component render properly", () => {
    const { getByTestId } = render(Register, {});
    expect(getByTestId("register-wrapper")).toBeTruthy();
  });
});
