import type { Meta, StoryObj } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { ComponingTableComponent } from './componing-table.component';

interface header{
key:string,
label:string
}

const meta: Meta<ComponingTableComponent<header>> = {
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
type Story = StoryObj<ComponingTableComponent<header>>;




