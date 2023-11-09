import React from 'react';

import { Tabs } from './Components/Components.jsx';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],

};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <div label="One">Content One</div>,
    <div label="Two">Content Two</div>,
    <div label="Three">Content Three</div>,
  ]
};