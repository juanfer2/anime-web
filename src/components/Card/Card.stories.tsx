import React from 'react';
import Card from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

const Story = (args: any) => <Card {...args} />;

export const Default: ComponentStory<typeof Card> = Story.bind({});

const Props = {
  image: 'https://cdn.myanimelist.net/images/anime/1974/111954l.webp',
  title: 'conected'
};

Default.args = Props;
