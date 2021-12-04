import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedProductsComponent } from './used-products.component';

describe('UsedProductsComponent', () => {
  let component: UsedProductsComponent;
  let fixture: ComponentFixture<UsedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
