import React from 'react';
import AnimationPage from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/AnimationPage',
  component: AnimationPage
} as Meta;

const Story = (args: any) => <AnimationPage {...args} />;

export const Default: ComponentStory<typeof AnimationPage> = Story.bind({});

const Props = {};

Default.args = Props;
