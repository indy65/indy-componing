import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
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

export const differentText: Story = {
  args: {
    label: 'meh',
  },
};
export const differentText2: Story = {
  args: {
    label: 'meh2',
  },
};
