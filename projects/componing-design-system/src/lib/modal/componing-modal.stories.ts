import type { Meta, StoryObj } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { ComponingModalComponent } from './componing-modal.component';

@Component({
  selector: 'test-component',
  template: `
    <button (click)="clickEvent()">click me</button>
    <componing-modal [isOpened]="isOpened" (triggereCloseModal)="clickEvent()">
      <p>header</p>
      <p modal_body>body</p>
      <p modal_footer>footer</p>
    </componing-modal>
  `,
  standalone: true,
  imports: [ComponingModalComponent],
})
export class testComponent {
  isOpened = false;

  clickEvent() {
    this.isOpened = !this.isOpened;
  }
}

const meta: Meta<testComponent> = {
  title: 'Components/Modal',
  component: testComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<testComponent>;

export const primary: Story = {
  render: (args) => ({
    props: args,
  }),
};
