import type { Story } from "@storybook/react";
import type { ButtonProps } from "./Button";

import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

const handleClick = () => {
  console.log("clicked");
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: "outlined",
  text: "outlined",
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: "contained",
  text: "contained",
};

export const TextButton = Template.bind({});
Template.args = {
  variant: "text",
  text: "text",
};

export const DisabledButton: Story<ButtonProps> = (args) => (
  <Button onClick={action("clicked")} {...args} />
);
DisabledButton.args = {
  variant: "contained",
  text: "disabled",
  disabled: true,
  onClick: handleClick,
};
