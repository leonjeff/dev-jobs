import {ComponentStory,ComponentMeta} from '@storybook/react'

import { Checkbox } from "./checkbox";


export default {
    title:"Components/Checkbox",
    component:Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox />;

export const Primary = Template.bind({});
Primary.args = {
    checked:true
};