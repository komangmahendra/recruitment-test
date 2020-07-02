import { render, fireEvent } from "@testing-library/vue";

//components
import RadioButton from "./RadioButton.vue";

describe("Radio Button testing", () => {
  test("radio button render properly", () => {
    const mockOnClick = jest.fn();

    const { getByTestId } = render(RadioButton, {
      props: {
        label: "test",
        onClick: mockOnClick,
        checked: false,
        disabled: false,
      },
    });

    const button = getByTestId("radio-button");

    fireEvent.click(button);
    expect(button).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test("cannot click when disabled", () => {
    const mockOnClick = jest.fn();

    const { getByTestId } = render(RadioButton, {
      props: {
        label: "test",
        onClick: mockOnClick,
        checked: false,
        disabled: true,
      },
    });

    const button = getByTestId("radio-button");

    fireEvent.click(button);
    expect(button).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(0);
  });
});
