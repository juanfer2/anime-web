import React from 'react';
import SectionListAnime from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SectionListAnime',
  component: SectionListAnime,
} as Meta;

const Story = (args: any) => <SectionListAnime {...args} />;

export const Default: ComponentStory<typeof SectionListAnime> = Story.bind({});

const Props = {};

Default.args = Props;
