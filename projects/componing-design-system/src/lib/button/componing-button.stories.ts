import type { Meta, StoryObj } from '@storybook/angular';
import { ComponingButtonComponent } from './componing-button.component';

const meta: Meta<ComponingButtonComponent> = {
  title: 'Components/Button',
  component: ComponingButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'test labe',
  },
};

export default meta;
type Story = StoryObj<ComponingButtonComponent>;

export const primary: Story = {
  args: {
    label: 'meh2',
    variant: 'primary',
  },
};
export const secundary: Story = {
  args: {
    label: 'meh2',
    variant: 'secundary',
  },
};
export const isDisabled: Story = {
  args: {
    label: 'meh2',
    variant: 'primary',
    isDisabled:true
  },
};
