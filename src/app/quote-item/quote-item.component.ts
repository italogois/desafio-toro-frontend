import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteItem } from '../types/quote';
@Component({
  selector: 'app-quote-item',
  imports: [CommonModule],
  templateUrl: './quote-item.component.html',
  styleUrl: './quote-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteItemComponent {
  @Input() quote: QuoteItem;
}
