import type { Story } from "@storybook/react";
import type { ButtonProps } from "./Button";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
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

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  variant: "contained",
  text: "disabled",
  disabled: true,
};
