import { render } from "@testing-library/vue";

//components
import Dropdown from "./Dropdown.vue";

describe("Dropdown testing", () => {
  test("dropdown render properly", () => {
    const mockOnChange = jest.fn();
    const { getByText } = render(Dropdown, {
      props: {
        onChange: mockOnChange,
        placeholder: "Test Select",
        options: [{ label: "1", value: "1" }],
        disabled: false,
      },
    });

    const dropdown = getByText("Test Select");
    expect(dropdown).toBeTruthy();

    const option = getByText("1");
    expect(option).toBeTruthy();
  });
});
