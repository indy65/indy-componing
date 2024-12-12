import type { Meta, StoryObj } from '@storybook/angular';
import { ComponingButtonComponent } from './componing-button.component';
import { Component, input } from '@angular/core';

@Component({
  selector: 'test-component',
  template: `
    <componing-button
      [variant]="variant()"
      [isDisabled]="isDisabled()"
      (onClick)="clickEvent()"
    >
      <p style="color: white;">click me</p>
    </componing-button>
  `,
  standalone: true,
  imports: [ComponingButtonComponent],
})
export class testComponent {
  readonly isDisabled = input<boolean>(false);
  readonly variant = input<'primary' | 'secundary'>('primary');
  readonly label = input<string>();
  clickEvent() {
    console.log('i was clicked');
  }
}

const meta: Meta<testComponent> = {
  title: 'Components/Button',
  component: testComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'test labe',
  },
};

export default meta;
type Story = StoryObj<testComponent>;


export const primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    variant: 'primary',
  },
};
export const secundary: Story = {
  args: {
    variant: 'secundary',
  },
};
export const Disabled: Story = {
  args: {
    variant: 'primary',
    isDisabled: true,
  },
};
export const regular: Story = {
  args: {
  },
};
