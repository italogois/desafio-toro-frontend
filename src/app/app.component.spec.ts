import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
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

  it('should render the ordenation label and buttons', () => {
    const element = fixture.nativeElement as HTMLElement;

    const label = element.querySelector('[data-test="ordenation-label"]') as HTMLSpanElement;

    const buttonEmAlta = element.querySelector('[data-test="ordenation-button-em-alta"]') as HTMLButtonElement;

    const buttonEmBaixa = element.querySelector('[data-test="ordenation-button-em-baixa"]') as HTMLButtonElement;

    expect(label.textContent).toContain('Ordenar:');
    expect(buttonEmAlta.textContent).toContain('Em Alta');
    expect(buttonEmBaixa.textContent).toContain('Em Baixa');
  });
});
