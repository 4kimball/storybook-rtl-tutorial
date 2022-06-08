import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Button.stories";

describe("Button", () => {
  const { OutlinedButton, DisabledButton } = composeStories(stories);

  it("renders the Button", async () => {
    render(<OutlinedButton />);
  });
});
