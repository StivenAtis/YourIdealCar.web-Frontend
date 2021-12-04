import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvisorsComponent } from './create-advisors.component';

describe('CreateAdvisorsComponent', () => {
  let component: CreateAdvisorsComponent;
  let fixture: ComponentFixture<CreateAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
