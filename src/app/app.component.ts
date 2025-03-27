import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, QuoteItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
