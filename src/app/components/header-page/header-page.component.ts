import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '../../types/sort';

@Component({
  selector: 'app-header-page',
  imports: [],
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
