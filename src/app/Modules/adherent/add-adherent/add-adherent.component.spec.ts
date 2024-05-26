import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdherentComponent } from './add-adherent.component';

describe('AddAdherentComponent', () => {
  let component: AddAdherentComponent;
  let fixture: ComponentFixture<AddAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
