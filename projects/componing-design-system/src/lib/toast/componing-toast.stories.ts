import type { Meta, StoryObj } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { ComponingToastComponent } from './componing-toast.component';
import { ToastSeverity } from '../../types/types';


const meta: Meta<ComponingToastComponent> = {
  title: 'Components/Toast',
  component: ComponingToastComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ComponingToastComponent>;

export const Error: Story = {
  render: (args) => ({
    props: args,
  }),
  args:{

    severity:ToastSeverity.Error,
    title:'Toast Title',
    message:'Toast Message'
  }
};
export const Warning: Story = {
  render: (args) => ({
    props: args,
  }),
  args:{
    severity:ToastSeverity.Warning,
    title:'Toast Title',
    message:'Toast Message'
  }
};
export const Info: Story = {
  render: (args) => ({
    props: args,
  }),
  args:{
    severity:ToastSeverity.Info,
    title:'Toast Title',
    message:'Toast Message',
  }
};
