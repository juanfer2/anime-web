import React from 'react';
import Categories from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Categories',
  component: Categories
} as Meta;

const Story = (args: any) => <Categories {...args} />;

export const Default: ComponentStory<typeof Categories> = Story.bind({});

const Props = {};

Default.args = Props;
