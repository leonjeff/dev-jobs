import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChangeEvent } from "react";

import { TextField } from "./text-field";

export default {
  title: "Components/TextInput",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

const changed = (e: ChangeEvent<HTMLInputElement>) => {
  console.log("Handling change");
  const newValue = e.target.value;
};

export const Primary = Template.bind({});
Primary.args = {
  value: "value",
  placeholder: "This is a placeholder text",
  handleChange: changed,
};
