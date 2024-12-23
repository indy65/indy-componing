import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponingTableComponent } from './componing-table.component';

describe('TableComponent', () => {
  let component: ComponingTableComponent;
  let fixture: ComponentFixture<ComponingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
