import { Component, input } from '@angular/core';

export interface TableColumn<T> {
  key: keyof T; // The property of the data item to display
  header: string; // The header text to display
}

// table-item.model.ts
export interface TableItem {
  [key: string]: any; // Generic interface for table items
}

@Component({
  selector: 'componing-table',
  templateUrl: './componing-table.component.html',
  styleUrl: './componing-table.component.scss',
  standalone: true,
  imports: [],
})
export class ComponingTableComponent<T> {
  readonly columns = input<TableColumn<T>[]>([]);
  readonly items = input<T[]>([]);
}
