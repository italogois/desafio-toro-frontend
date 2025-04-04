import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuoteItemComponent } from './quote-item.component';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { QuoteItem } from '../../types/quote';

registerLocaleData(localePt);

const quoteItemMock: QuoteItem = {
  stockMarket: 'BBDC4',
  price: 2.78,
  priceDown: false,
  timestamp: 1716921600000,
};

describe('QuoteItemComponent', () => {
  let component: QuoteItemComponent;
  let fixture: ComponentFixture<QuoteItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [QuoteItemComponent, CurrencyPipe],
      providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    });
    fixture = TestBed.createComponent(QuoteItemComponent);
    component = fixture.componentInstance;
    component.quote = quoteItemMock;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render quote stock market name', () => {
    const element = fixture.nativeElement as HTMLElement;

    const quoteStockMarketName = element.querySelector('[data-test="quote-stock-market-name"]') as HTMLDivElement;

    expect(quoteStockMarketName.textContent).toContain('BBDC4');
  });

  it('should render active price label and value', () => {
    const element = fixture.nativeElement as HTMLElement;
    const mockPrice = quoteItemMock.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    fixture.detectChanges();

    const activePriceLabel = element.querySelector('[data-test="active-price-label"]') as HTMLDivElement;
    const activePriceValue = element.querySelector('[data-test="active-price-value"]') as HTMLDivElement;

    expect(activePriceLabel.textContent).toContain('Preço do ativo');
    expect(activePriceValue.textContent?.trim()).toStrictEqual(mockPrice);
  });
});
