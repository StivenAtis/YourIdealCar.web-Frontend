import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';
import { DeleteCustomersComponent } from './customers/delete-customers/delete-customers.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { CreateAdvisorsComponent } from './advisors/create-advisors/create-advisors.component';
import { EditAdvisorsComponent } from './advisors/edit-advisors/edit-advisors.component';
import { DeleteAdvisorsComponent } from './advisors/delete-advisors/delete-advisors.component';
import { SearchAdvisorsComponent } from './advisors/search-advisors/search-advisors.component';
import { CreateVehiclesComponent } from './vehicles/create-vehicles/create-vehicles.component';
import { EditVehiclesComponent } from './vehicles/edit-vehicles/edit-vehicles.component';
import { DeleteVehiclesComponent } from './vehicles/delete-vehicles/delete-vehicles.component';
import { SearchVehiclesComponent } from './vehicles/search-vehicles/search-vehicles.component';


@NgModule({
  declarations: [
    CreateCustomersComponent,
    EditCustomersComponent,
    DeleteCustomersComponent,
    SearchCustomersComponent,
    CreateAdvisorsComponent,
    EditAdvisorsComponent,
    DeleteAdvisorsComponent,
    SearchAdvisorsComponent,
    CreateVehiclesComponent,
    EditVehiclesComponent,
    DeleteVehiclesComponent,
    SearchVehiclesComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
