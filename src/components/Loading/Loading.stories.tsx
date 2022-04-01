import React from 'react';
import Loading from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Loading',
  component: Loading
} as Meta;

const Story = (args: any) => <Loading {...args} />;

export const Default: ComponentStory<typeof Loading> = Story.bind({});

const Props = {};

Default.args = Props;
