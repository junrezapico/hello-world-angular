import { Story, Meta } from '@storybook/angular/types-6-0';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
class TextInput {
  clickMessage = '';
  onChangeKey = () => {};
  onMyClickMe = () => {};
}
export default {
  title: 'atoms/TextInput',
  component: TextInput,
  argTypes: {},
} as Meta;

const Template: Story<TextInput> = (args: TextInput) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
