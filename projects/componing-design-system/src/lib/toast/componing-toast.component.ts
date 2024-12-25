import { Component, input, output, signal } from '@angular/core';
import { ToastSeverity } from '../../types/types';


@Component({
  selector: 'componing-toast',
  imports: [],
  styleUrl: './componing-toast.component.scss',
  templateUrl: './componing-toast.component.html',
  standalone: true,
})

export class ComponingToastComponent {

  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly severity = input<ToastSeverity>();

}
