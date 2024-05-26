import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentComponent } from './adherent.component';

describe('AdherentComponent', () => {
  let component: AdherentComponent;
  let fixture: ComponentFixture<AdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
