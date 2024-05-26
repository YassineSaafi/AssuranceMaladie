import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdherentComponent } from './get-adherent.component';

describe('GetAdherentComponent', () => {
  let component: GetAdherentComponent;
  let fixture: ComponentFixture<GetAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
