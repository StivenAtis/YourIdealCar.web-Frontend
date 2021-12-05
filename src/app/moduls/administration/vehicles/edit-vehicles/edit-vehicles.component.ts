import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.component.html',
  styleUrls: ['./edit-vehicles.component.css']
})
export class EditVehiclesComponent implements OnInit {

  id: string = '';

  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'marca': ['', [Validators.required]],
    'referencia': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'estado': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private ServicioVehiculo: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.ServicioVehiculo.ObtenerRegistroPorId(this.id).subscribe((datos: ModelProduct) =>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["marca"].setValue(datos.marca);
      this.fgValidator.controls["referencia"].setValue(datos.referencia);
      this.fgValidator.controls["modelo"].setValue(datos.modelo);
      this.fgValidator.controls["valor"].setValue(datos.valor);
      this.fgValidator.controls["fecha"].setValue(datos.fecha);
      this.fgValidator.controls["estado"].setValue(datos.estado);
    });
  }

  editarVehiculo(){
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
    p.id_vehiculo = this.id;

    this.ServicioVehiculo.ActualizarProducto(p).subscribe((datos: ModelProduct) => {
      alert("vehiculo actualizado correctamente");
      this.router.navigate(["/administration/search-vehicles"])
    },
    (error: any) => {
      alert("Error actualizando el vehiculo" + error.message);
    })
  }


}
