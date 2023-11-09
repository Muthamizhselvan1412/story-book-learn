import React from 'react';
import '../index.css';
import { Select } from './Components/Components';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators:  [(Story) => <div className='center'><Story/></div>],
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  label: 'Select an Option',
  options: [
    { value: 'a', description: 'Option A' },
    { value: 'b', description: 'Option B' },
    { value: 'c', description: 'Option C' },
  ]
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  label: 'Select an Option',
  options: [
    { value: 'a', description: 'Option A' },
    { value: 'b', description: 'Option B' },
    { value: 'c', description: 'Option C' },
  ]
};