import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdvisorsComponent } from './delete-advisors.component';

describe('DeleteAdvisorsComponent', () => {
  let component: DeleteAdvisorsComponent;
  let fixture: ComponentFixture<DeleteAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
