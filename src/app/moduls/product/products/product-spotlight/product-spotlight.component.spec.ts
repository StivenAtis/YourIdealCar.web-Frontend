import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpotlightComponent } from './product-spotlight.component';

describe('ProductSpotlightComponent', () => {
  let component: ProductSpotlightComponent;
  let fixture: ComponentFixture<ProductSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpotlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
