import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MouseEvent } from "react";

import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const handleClicked = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log("It works");
};

export const Primary = Template.bind({});
Primary.args = {
  name: "Enviar",
  handleClick: handleClicked,
};
