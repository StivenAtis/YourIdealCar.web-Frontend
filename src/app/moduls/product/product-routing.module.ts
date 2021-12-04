import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSpotlightComponent } from './products/product-spotlight/product-spotlight.component';
import { NewProductsComponent } from './products/new-products/new-products.component';
import { UsedProductsComponent } from './products/used-products/used-products.component';

const routes: Routes = [
  {
    path: "product-spotlight",
    component: ProductSpotlightComponent
  },
  {
    path: "new-product",
    component: NewProductsComponent
  },
  {
    path: "used-product",
    component: UsedProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
