import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { QuoteResponse } from '../types/quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  connect() {
    return webSocket<QuoteResponse>('ws://localhost:8080/quotes');
  }
}
