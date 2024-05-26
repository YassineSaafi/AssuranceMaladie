import { TestBed } from '@angular/core/testing';

import { ConjointServiceService } from './conjoint-service.service';

describe('ConjointServiceService', () => {
  let service: ConjointServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjointServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
