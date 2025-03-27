import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const componentElement = fixture.nativeElement as HTMLElement;

    const img = componentElement.querySelector('[data-test="toro-logo"]') as HTMLImageElement;

    expect(img.src).toContain('toro-logo.png');
    expect(img.alt).toBe('Toro Logo');
  });
});
