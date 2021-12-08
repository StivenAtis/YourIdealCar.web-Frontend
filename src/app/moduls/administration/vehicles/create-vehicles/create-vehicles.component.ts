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
    //'id_vehiculo': ['', [Validators.required]],
    'marca': ['', [Validators.required]],
    'referencia': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'imagen': ['', [Validators.required]],
    'solicitudId': ['', [Validators.required]],
    'tipoVehiculoId': ['', [Validators.required]],
    'departamentoId': ['', [Validators.required]],
    'ciudadId': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder, private ServicioVehiculo: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarVehiculo(){
    //let id_vehiculo = this.fgValidator.controls["id_vehiculo"].value;
    let marca = this.fgValidator.controls["marca"].value;
    let referencia = this.fgValidator.controls["referencia"].value;
    let modelo = parseInt(this.fgValidator.controls["modelo"].value);
    let valor = parseInt(this.fgValidator.controls["valor"].value);
    let fecha = this.fgValidator.controls["fecha"].value;
    let estado = this.fgValidator.controls["estado"].value;
    let imagen = this.fgValidator.controls["imagen"].value;
    let solicitudId = this.fgValidator.controls["solicitudId"].value;
    let tipoVehiculoId = this.fgValidator.controls["solicitudId"].value;
    let departamentoId = this.fgValidator.controls["solicitudId"].value;
    let ciudadId = this.fgValidator.controls["solicitudId"].value;

    let p = new ModelProduct();
    //p.id_vehiculo = id_vehiculo;
    p.marca = marca;
    p.referencia = referencia;
    p.modelo = modelo;
    p.valor = valor;
    p.fecha = fecha;
    p.estado = estado;
    p.imagen = imagen;
    p.solicitudId = solicitudId;
    p.tipoVehiculoId = tipoVehiculoId;
    p.departamentoId = departamentoId;
    p.ciudadId= ciudadId;

    this.ServicioVehiculo.CrearProducto(p).subscribe((datos: ModelProduct) => {
      alert("vehiculo almacenado correctamente");
      this.router.navigate(["/administration/search-vehicles"])
    },
    (error: any) => {
      alert("Error almacenando el vehiculo" + error.message);
    })
  }

}
