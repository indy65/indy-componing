import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponingButtonComponent } from './componing-button.component';

describe('ComponingButtonComponent', () => {
  let component: ComponingButtonComponent;
  let fixture: ComponentFixture<ComponingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponingButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
