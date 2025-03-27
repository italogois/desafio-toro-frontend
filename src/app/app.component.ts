import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteService } from './service/quote.service';
import { Sort } from './types/sort';
import { QuoteItem, QuoteResponse } from './types/quote';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, QuoteItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  quoteService = inject(QuoteService);

  quotes: QuoteItem[] = [];
  sort: Sort = 'em-alta';

  sortBy(sortParam: Sort) {
    this.sort = sortParam;
  }

  sortQuotes(quotes: QuoteItem[]) {
    if (this.sort === 'em-alta') {
      quotes.sort((a, b) => b.price - a.price);
    } else {
      quotes.sort((a, b) => a.price - b.price);
    }

    return quotes;
  }

  addQuote(transformedQuote: QuoteItem) {
    const existingQuoteIndex = this.quotes.findIndex((q) => q.stockMarket === transformedQuote.stockMarket);

    if (existingQuoteIndex !== -1) {
      const currentPrice = this.quotes[existingQuoteIndex].price;

      transformedQuote.priceDown = transformedQuote.price < currentPrice;

      this.quotes[existingQuoteIndex] = transformedQuote;
    } else {
      this.quotes.push(transformedQuote);
    }

    this.quotes = this.sortQuotes(this.quotes);
  }

  initQuoteWebSocket() {
    this.quoteService.connect().subscribe((quote: QuoteResponse) => {
      const quoteKey = Object.keys(quote)[0];

      const transformedQuote: QuoteItem = {
        stockMarket: quoteKey,
        price: quote[quoteKey],
        timestamp: quote.timestamp,
        priceDown: null,
      };

      this.addQuote(transformedQuote);
    });
  }

  ngOnInit() {
    this.initQuoteWebSocket();
  }
}
