import { render, fireEvent } from "@testing-library/vue";
import Button from "./Button.vue";

describe("Button testing", () => {
  test("button render properly", () => {
    const onClickFunc = jest.fn();
    const { getByTestId, getByText } = render(Button, {
      props: { title: "Register", onClick: onClickFunc },
    });

    const rendered = getByTestId("primary-button");
    expect(rendered).toBeTruthy();
    expect(getByText("Register")).toBeTruthy();
  });

  test("trigger function if clicked", () => {
    const onClickFunc = jest.fn();
    const { getByTestId } = render(Button, {
      props: { title: "Register", onClick: onClickFunc },
    });

    fireEvent.click(getByTestId("primary-button"));
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc).toBeCalledTimes(1);
  });
});
