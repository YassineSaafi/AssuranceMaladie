import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjointComponent } from './conjoint.component';

describe('ConjointComponent', () => {
  let component: ConjointComponent;
  let fixture: ComponentFixture<ConjointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
