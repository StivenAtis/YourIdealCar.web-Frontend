import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { CreateRequestsComponent } from './u-requests/create-requests/create-requests.component';
import { EditRequestsComponent } from './u-requests/edit-requests/edit-requests.component';
import { DeleteRequestsComponent } from './u-requests/delete-requests/delete-requests.component';
import { SearchRequestsComponent } from './u-requests/search-requests/search-requests.component';


@NgModule({
  declarations: [
    CreateRequestsComponent,
    EditRequestsComponent,
    DeleteRequestsComponent,
    SearchRequestsComponent,
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
