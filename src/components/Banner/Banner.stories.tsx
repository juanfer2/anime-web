import React from 'react';
import Banner from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Banner',
  component: Banner
} as Meta;

const Story = (args: any) => <Banner {...args} />;

export const Default: ComponentStory<typeof Banner> = Story.bind({});

const Props = {};

Default.args = Props;
