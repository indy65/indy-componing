import type { Meta, StoryObj } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { ComponingTableComponent } from './componing-table.component';

interface columns {

  name: string,
  age: string,
  sex: string,

}

const items = [{
  name: 'jonas',
  age: 'para ter juizo',
  sex: 'some times'
},
{
  name: 'mestre',
  age: 'demasiada',
  sex: 'yes'
},{
  name: 'dunno',
  age: 'dunno',
  sex: '??'
}]


const meta: Meta<ComponingTableComponent<columns>> = {
  title: 'Components/Table',
  component: ComponingTableComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
};

export default meta;
type Story = StoryObj<ComponingTableComponent<columns>>;

export const table: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    items: items
  }


};




