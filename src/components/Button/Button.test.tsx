import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Button.stories";

describe("Button", () => {
  const { OutlinedButton, DisabledButton } = composeStories(stories);

  it("renders the Button", async () => {
    render(<OutlinedButton />);
  });

  it("disabled button", async () => {
    render(<DisabledButton />);

    const disabledButton = screen.getByText("disabled");
    fireEvent.click(disabledButton);
    expect(disabledButton).toHaveAttribute("disabled");
  });
});
