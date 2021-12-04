import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvisorsComponent } from './edit-advisors.component';

describe('EditAdvisorsComponent', () => {
  let component: EditAdvisorsComponent;
  let fixture: ComponentFixture<EditAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
