import React from 'react';
import ListCard from '.';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/ListCard',
  component: ListCard
} as Meta;

const Story = (args: any) => <ListCard {...args} />;

export const Default: ComponentStory<typeof ListCard> = Story.bind({});

const Props = {};

Default.args = Props;
