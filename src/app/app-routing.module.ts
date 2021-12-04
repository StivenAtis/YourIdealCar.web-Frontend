import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCustomersComponent } from './moduls/administration/customers/create-customers/create-customers.component';
import { LoginComponent } from './moduls/security/login/login.component';
import { HomeComponent } from './template/home/home.component';
import { ContactComponent } from './moduls/contact/contact-us/contact/contact.component';
import { AboutComponent } from './moduls/about/about-us/about/about.component';
import { ProductSpotlightComponent } from './moduls/product/products/product-spotlight/product-spotlight.component';
import { NewProductsComponent } from './moduls/product/products/new-products/new-products.component';
import { UsedProductsComponent } from './moduls/product/products/used-products/used-products.component';
import { ErrorComponent } from './template/error/error.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-spotlight',
    component: ProductSpotlightComponent
  },
  {
    path: 'car-new',
    component: NewProductsComponent
  },
  {
    path: 'car-used',
    component: UsedProductsComponent
  },
  {
    path:"about-us",
    component:AboutComponent
  },
  {
    path:"contact-us",
    component:ContactComponent
  },
  {
    path:"create-customer",
    component:CreateCustomersComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo:"/home"
  },
  {
    path:"products",
    loadChildren: ()=>import("./moduls/product/product.module").then(x=>x.ProductModule)
  },
  {
    path:"about",
    loadChildren: ()=>import("./moduls/about/about.module").then(x=>x.AboutModule)
  },
  {
    path:"contact",
    loadChildren: ()=>import("./moduls/contact/contact.module").then(x=>x.ContactModule)
  },
  {
    path:"request",
    loadChildren: ()=>import("./moduls/requests/requests.module").then(x=>x.RequestsModule)
  },
  {
    path:"administration",
    loadChildren: ()=>import("./moduls/administration/administration.module").then(x=>x.AdministrationModule)
  },
  {
    path:"security",
    loadChildren: ()=>import("./moduls/security/security.module").then(x=>x.SecurityModule)
  }
  ,
  {
  path:"**",
  component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
