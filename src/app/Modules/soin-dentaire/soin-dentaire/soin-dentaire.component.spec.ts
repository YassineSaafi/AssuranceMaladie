import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinDentaireComponent } from './soin-dentaire.component';

describe('SoinDentaireComponent', () => {
  let component: SoinDentaireComponent;
  let fixture: ComponentFixture<SoinDentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinDentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinDentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
