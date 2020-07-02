import { render } from "@testing-library/vue";

//components
import ErrorTooltip from "./ErrorTooltip.vue";

describe("Error Tooltip testing", () => {
  test("error tooltip render properly", () => {
    const { getByText } = render(ErrorTooltip, {
      props: { content: "Please enter valid Indonesian number" },
    });

    const rendered = getByText("Please enter valid Indonesian number");
    expect(rendered).toBeTruthy();
  });
});
