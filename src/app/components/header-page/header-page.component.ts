import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '../../types/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-page',
  imports: [CommonModule],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {
  @Input() currentSort: Sort;
  @Output() sortByEvent = new EventEmitter<Sort>();

  sortBy(sort: Sort) {
    this.sortByEvent.emit(sort);
  }
}
