import { Component, OnInit } from '@angular/core';
import { ModelCustomer } from 'src/app/models/customers.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  listadoRegistros: ModelCustomer[] = [];

  constructor(private ClienteServicio: CustomerService) { }

  ngOnInit(): void {
    this.ObtenerCliente();
  }

  ObtenerCliente(){
    this.ClienteServicio.ObtenerRegistros().subscribe((datos: ModelCustomer[]) => {
      this.listadoRegistros = datos;
    })
  }

}
