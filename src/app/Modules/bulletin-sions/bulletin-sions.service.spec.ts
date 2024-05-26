import { TestBed } from '@angular/core/testing';

import { BulletinSionsService } from './bulletin-sions.service';

describe('BulletinSionsService', () => {
  let service: BulletinSionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinSionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
