import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulletinSionsComponent } from './add-bulletin-sions.component';

describe('AddBulletinSionsComponent', () => {
  let component: AddBulletinSionsComponent;
  let fixture: ComponentFixture<AddBulletinSionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBulletinSionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulletinSionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
