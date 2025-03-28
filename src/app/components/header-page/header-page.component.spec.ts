import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderPageComponent } from './header-page.component';

describe('HeaderPageComponent', () => {
  let component: HeaderPageComponent;
  let fixture: ComponentFixture<HeaderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HeaderPageComponent],
    });
    fixture = TestBed.createComponent(HeaderPageComponent);
    component = fixture.componentInstance;
    component.currentSort = 'em-alta';
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
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

  it('should emit the sort by event when the button is clicked', () => {
    const spySortByEvent = jest.spyOn(component.sortByEvent, 'emit');

    const buttonEmAlta = fixture.nativeElement.querySelector('[data-test="ordenation-button-em-alta"]');
    const buttonEmBaixa = fixture.nativeElement.querySelector('[data-test="ordenation-button-em-baixa"]');

    buttonEmAlta.click();
    buttonEmBaixa.click();

    expect(spySortByEvent).toHaveBeenCalledWith('em-alta');
    expect(spySortByEvent).toHaveBeenCalledWith('em-baixa');
  });
});
