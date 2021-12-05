import { Component, OnInit } from '@angular/core';
import { ModelProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit {

  listadoRegistros: ModelProduct[] =[];

  constructor(private productoServicio: ProductService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos: ModelProduct[]) => {
      this.listadoRegistros = datos;
    })
  }
}
