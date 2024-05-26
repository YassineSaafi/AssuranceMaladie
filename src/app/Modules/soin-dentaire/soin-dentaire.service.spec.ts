import { TestBed } from '@angular/core/testing';

import { SoinDentaireService } from './soin-dentaire.service';

describe('SoinDentaireService', () => {
  let service: SoinDentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoinDentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
