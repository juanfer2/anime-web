import React from 'react';
import Button, { ButtonI } from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Story = (args: any) => <Button {...args} />;

// Default

export const Default: ComponentStory<typeof Button> = Story.bind({});

const props: ButtonI = {
  children: 'Button',
  size: 'medium',
  type: 'light',
  rounded: false,
  outline: false
};

const PropsDefault: ButtonI = { ...props };

Default.args = PropsDefault;

// Primary
export const Primary: ComponentStory<typeof Button> = Story.bind({});

const PropsPrimary: ButtonI = {
  ...props,
  type: 'primary'
};

Primary.args = PropsPrimary;

// Secondary
export const Secondary: ComponentStory<typeof Button> = Story.bind({});

const PropsSecondary: ButtonI = {
  ...props,
  type: 'secondary'
};

Secondary.args = PropsSecondary;

// Success
export const Success: ComponentStory<typeof Button> = Story.bind({});

const PropsSuccess: ButtonI = {
  ...props,
  type: 'success'
};

Success.args = PropsSuccess;

// Danger
export const Danger: ComponentStory<typeof Button> = Story.bind({});

const PropsDanger: ButtonI = {
  ...props,
  type: 'danger'
};

Danger.args = PropsDanger;
