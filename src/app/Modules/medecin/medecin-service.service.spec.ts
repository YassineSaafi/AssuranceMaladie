import { TestBed } from '@angular/core/testing';

import { MedecinServiceService } from './medecin-service.service';

describe('MedecinServiceService', () => {
  let service: MedecinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
