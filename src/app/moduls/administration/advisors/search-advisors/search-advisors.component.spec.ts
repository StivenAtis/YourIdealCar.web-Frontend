import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvisorsComponent } from './search-advisors.component';

describe('SearchAdvisorsComponent', () => {
  let component: SearchAdvisorsComponent;
  let fixture: ComponentFixture<SearchAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
