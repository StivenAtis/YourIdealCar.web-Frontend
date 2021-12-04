import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCustomersComponent } from './moduls/administration/customers/create-customers/create-customers.component';
import { LoginComponent } from './moduls/security/login/login.component';
import { HomeComponent } from './template/home/home.component';
import { ErrorComponent } from './template/error/error.component';
import { ContactComponent } from './moduls/contact/contact-us/contact/contact.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
