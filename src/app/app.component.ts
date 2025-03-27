import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteService } from './service/quote.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, QuoteItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  quoteService = inject(QuoteService);

  quotes: any[] = [];

  ngOnInit() {
    this.quoteService.connect().subscribe((quote: any) => {
      const quoteKeys = Object.keys(quote)[0];
      const stockData = quote[quoteKeys];

      console.log(stockData);

      const transformedQuote = {
        stockMarket: quoteKeys,
        price: quote[quoteKeys],
        timestamp: quote.timestamp,
      };

      const existingQuoteIndex = this.quotes.findIndex((q) => q.stockMarket === transformedQuote.stockMarket);

      if (existingQuoteIndex !== -1) {
        this.quotes[existingQuoteIndex] = transformedQuote;
      } else {
        this.quotes.push(transformedQuote);
      }
    });
  }
}
