import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';

const routes: Routes = [
  {
    path: "create-customers",
    component: CreateCustomersComponent
  },
  {
    path: "edit-customers",
    component: EditCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
