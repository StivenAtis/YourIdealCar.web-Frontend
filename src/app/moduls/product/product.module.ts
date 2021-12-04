import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSpotlightComponent } from './products/product-spotlight/product-spotlight.component';
import { NewProductsComponent } from './products/new-products/new-products.component';
import { UsedProductsComponent } from './products/used-products/used-products.component';


@NgModule({
  declarations: [
    ProductSpotlightComponent,
    NewProductsComponent,
    UsedProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
