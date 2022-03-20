import React from 'react';
import Layout from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Layout',
  component: Layout
} as Meta;

const Story = (args: any) => <Layout {...args} />;

export const Default: ComponentStory<typeof Layout> = Story.bind({});

const Props = {};

Default.args = Props;
