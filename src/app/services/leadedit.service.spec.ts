import { TestBed } from '@angular/core/testing';

import { LeadeditService } from './leadedit.service';

describe('LeadeditService', () => {
  let service: LeadeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
