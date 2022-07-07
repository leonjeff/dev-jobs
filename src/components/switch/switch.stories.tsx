import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch } from "./switch";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch />;

export const Primary = Template.bind({});
Primary.args = {};
