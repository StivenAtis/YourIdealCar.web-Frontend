import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-vehicles',
  templateUrl: './delete-vehicles.component.html',
  styleUrls: ['./delete-vehicles.component.css']
})
export class DeleteVehiclesComponent implements OnInit {

  id: string = "";

  fgValidator: FormGroup = this.fb.group({
    'marca': ['', [Validators.required]],
    'referencia': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'solicitudId': ['', [Validators.required]],
    'tipoVehiculoId': ['', [Validators.required]],
    'departamentoId': ['', [Validators.required]],
    'ciudadId': ['', [Validators.required]]

  });
  constructor(private fb: FormBuilder, private ServicioVehiculo: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo() {
    this.ServicioVehiculo.ObtenerRegistroPorId(this.id).subscribe((datos: ModelProduct) => {
      this.fgValidator.controls["marca"].setValue(datos.marca);
      this.fgValidator.controls["referencia"].setValue(datos.referencia);
      this.fgValidator.controls["modelo"].setValue(datos.modelo);
      this.fgValidator.controls["valor"].setValue(datos.valor);
      this.fgValidator.controls["fecha"].setValue(datos.fecha);
      this.fgValidator.controls["estado"].setValue(datos.estado);
    }, (error: any) => {
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    }
    );
  }

  EliminarVehiculo(){
    this.ServicioVehiculo.EliminarProducto(this.id).subscribe((datos:any)=>{
      alert(`Se ha eliminado exitosamente el vehiculo con id ${this.id}`);
      this.router.navigate(["/administration/search-vehicles"]);
    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })
  }

}
