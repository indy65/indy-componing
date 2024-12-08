import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'componing-button',
  imports: [],
  styleUrl:'./componing-button.component.scss',
  template: `
    <button
      [class]="' componing_button componing_button-' + variant()"
      [disabled]="isDisabled()"
      (click)="onClick.emit()"
    >
      {{ label() }}
    </button>
  `,
  standalone: true,
})
//color for general background #1A2744
//color for component background #45ADFF
//color for paragraph #92C4FF
export class ComponingButtonComponent {
  readonly isDisabled = input<boolean>(false);
  readonly variant = input<'primary' | 'secundary'>('primary');
  readonly label = input<string>();
  readonly onClick = output<void>();
}
