import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { QuoteService } from './service/quote.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let quoteServiceSpy: jest.Mocked<QuoteService>;

  beforeEach(async () => {
    quoteServiceSpy = {
      connect: jest
        .fn()
        .mockReturnValue(
          of(
            { PETR4: 25.0, timestamp: new Date().getTime() - 2000 },
            { PETR4: 20.0, timestamp: new Date().getTime() - 1000 },
            { BRSR4: 22.0, timestamp: new Date().getTime() },
          ),
        ),
    } as unknown as jest.Mocked<QuoteService>;

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: QuoteService, useValue: quoteServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const element = fixture.nativeElement as HTMLElement;

    const title = element.querySelector('[data-test="title-page"]') as HTMLHeadingElement;

    expect(title.textContent).toContain('Explore o mercado');
  });

  it('should initialize websocket connection and transform quote sorting by price in descending order', () => {
    component.sortBy('em-alta');
    component.ngOnInit();

    expect(quoteServiceSpy.connect).toHaveBeenCalled();
    expect(component.quotes).toHaveLength(2);
    expect(component.quotes[0].stockMarket).toBe('BRSR4');
    expect(component.quotes[0].price).toBe(22.0);
  });

  it('should initialize websocket connection and transform quote sorting by price in ascending order', () => {
    component.sortBy('em-baixa');
    component.ngOnInit();

    expect(quoteServiceSpy.connect).toHaveBeenCalled();
    expect(component.quotes).toHaveLength(2);
    expect(component.quotes[0].stockMarket).toBe('PETR4');
    expect(component.quotes[0].price).toBe(20.0);
  });

  it('should be change sort', () => {
    component.sortBy('em-baixa');

    expect(component.sort).toBe('em-baixa');
  });

  it('should be sort start with em-alta', () => {
    expect(component.sort).toBe('em-alta');
  });
});
