import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionValidatorGuard } from 'src/app/guardians/session-validator.guard';
import { SearchAdvisorsComponent } from './advisors/search-advisors/search-advisors.component';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
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
    component: EditCustomersComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "search-vehicles",
    component: SearchVehiclesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "create-vehicles",
    component: CreateVehiclesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "edit-vehicles/:id",
    component: EditVehiclesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "delete-vehicles/:id",
    component: DeleteVehiclesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "search-advisors",
    component: SearchAdvisorsComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: "search-customers",
    component: SearchCustomersComponent,
    canActivate: [SessionValidatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
