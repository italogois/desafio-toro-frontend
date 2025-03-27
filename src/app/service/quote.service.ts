import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { QuoteResponse } from '../types/quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  webSocket = 'ws://localhost:8080/quotes';

  connect() {
    return webSocket<QuoteResponse>(this.webSocket);
  }
}
