import React from 'react';
import Button from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Story = (args: any) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = Story.bind({});

const Props = {};

Default.args = Props;
