import type { Meta, StoryObj } from '@storybook/angular';
import { ComponingButtonComponent } from './componing-button.component';
import './componing-button.component.scss';

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
    label: 'meh',
    variant: 'primary',
  },
};
export const secundary: Story = {
  args: {
    label: 'meh',
    variant: 'secundary',
  },
};
