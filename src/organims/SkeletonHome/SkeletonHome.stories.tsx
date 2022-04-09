import React from 'react';
import SkeletonHome from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SkeletonHome',
  component: SkeletonHome
} as Meta;

const Story = (args: any) => <SkeletonHome {...args} />;

export const Default: ComponentStory<typeof SkeletonHome> = Story.bind({});

const Props = {};

Default.args = Props;
