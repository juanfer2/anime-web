import React from 'react';
import SubTitle from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SubTitle',
  component: SubTitle,
} as Meta;

const Story = (args: any) => <SubTitle {...args} />;

export const Default: ComponentStory<typeof SubTitle> = Story.bind({});

const Props = {};

Default.args = Props;
