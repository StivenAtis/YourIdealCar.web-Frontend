import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';

const routes: Routes = [
  {
    path: "create-customers",
    component: CreateCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
