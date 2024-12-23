import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'componing-modal',
  templateUrl: './componing-modal.component.html',
  styleUrls: ['./componing-modal.component.scss'],
})
export class ComponingModalComponent {
  isOpened = input<boolean>(false);
  triggereCloseModal = output<void>();

  closeModal(event:MouseEvent) {
    event.stopPropagation()
    this.triggereCloseModal.emit();
  }
}
