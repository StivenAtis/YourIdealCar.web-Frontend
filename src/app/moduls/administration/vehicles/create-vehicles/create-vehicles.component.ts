import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'marca': ['', [Validators.required]],
    'referencia': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'estado': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private ServicioVehiculo: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarVehiculo(){
    let marca = this.fgValidator.controls["marca"].value;
    let referencia = this.fgValidator.controls["referencia"].value;
    let modelo = parseInt(this.fgValidator.controls["modelo"].value);
    let valor = parseInt(this.fgValidator.controls["valor"].value);
    let fecha = this.fgValidator.controls["fecha"].value;
    let estado = this.fgValidator.controls["estado"].value;

    let p = new ModelProduct();
    p.marca = marca;
    p.referencia = referencia;
    p.modelo = modelo;
    p.valor = valor;
    p.fecha = fecha;
    p.estado = estado;

    this.ServicioVehiculo.CrearProducto(p).subscribe((datos: ModelProduct) => {
      alert("vehiculo almacenado correctamente");
      this.router.navigate(["/administration/search-vehicles"])
    },
    (error: any) => {
      alert("Error almacenando el vehiculo" + error.message);
    })
  }

}
