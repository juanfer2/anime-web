import React from 'react';
import Carrousel from '.';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Carrousel',
  component: Carrousel,
} as Meta;

const Story = (args: any) => <Carrousel {...args} />;

export const Default: ComponentStory<typeof Carrousel> = Story.bind({});

const Props = {};

Default.args = Props;
