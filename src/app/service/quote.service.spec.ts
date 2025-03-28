import { TestBed } from '@angular/core/testing';
import { QuoteService } from './quote.service';
import { webSocket } from 'rxjs/webSocket';

jest.mock('rxjs/webSocket', () => ({
  webSocket: jest.fn(),
}));

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [QuoteService] });
    service = TestBed.inject(QuoteService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should connect websocket', () => {
    const mockWebSocket = { subscribe: jest.fn() };
    (webSocket as jest.Mock).mockReturnValue(mockWebSocket);

    const result = service.connect();

    expect(webSocket).toHaveBeenCalledWith('ws://localhost:8080/quotes');
    expect(result).toBe(mockWebSocket);
  });
});
