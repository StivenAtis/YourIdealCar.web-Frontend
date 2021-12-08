import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';
import { CreateVehiclesComponent } from './vehicles/create-vehicles/create-vehicles.component';
import { DeleteVehiclesComponent } from './vehicles/delete-vehicles/delete-vehicles.component';
import { EditVehiclesComponent } from './vehicles/edit-vehicles/edit-vehicles.component';
import { SearchVehiclesComponent } from './vehicles/search-vehicles/search-vehicles.component';

const routes: Routes = [
  {
    path: "create-customers",
    component: CreateCustomersComponent
  },  
  {
    path: "edit-customers",
    component: EditCustomersComponent
  },
  {
    path: "search-vehicles",
    component: SearchVehiclesComponent
  },
  {
    path: "create-vehicles",
    component: CreateVehiclesComponent
  },
  {
    path: "edit-vehicles/:id",
    component: EditVehiclesComponent
  },
  {
    path: "delete-vehicles/:id",
    component: DeleteVehiclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
