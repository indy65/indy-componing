import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'componing-button',
  imports: [],
  styleUrl: './componing-button.component.scss',
  host: {
    role: 'button',
  },
  template: `
    <button
      [class]="'componing_button componing_button-' + variant()"
      [disabled]="isDisabled()"
      (click)="onClick.emit()"
    >
      <ng-content class="componing_button-content"> </ng-content>
    </button>
  `,
  standalone: true,
})
export class ComponingButtonComponent {
  readonly isDisabled = input<boolean>(true);
  readonly variant = input<'primary' | 'secundary' | null>();
  readonly onClick = output<void>();
}
