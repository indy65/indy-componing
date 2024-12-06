import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'componing-button',
  imports: [],
  template: ` <button>{{ label() }}</button> `,
  styles: ``,
})
export class ComponingButtonComponent {
  readonly label = input<string>();
}
