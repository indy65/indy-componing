import { TestBed } from '@angular/core/testing';

import { ComponingButtonService } from './componing-button.service';

describe('ComponingButtonService', () => {
  let service: ComponingButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponingButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
