import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModelAdvisor } from 'src/app/models/advisor.model';
import { AdvisorService } from 'src/app/services/advisor.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-advisors',
  templateUrl: './create-advisors.component.html',
  styleUrls: ['./create-advisors.component.css']
})
export class CreateAdvisorsComponent implements OnInit {

  
  fgValidator: FormGroup = this.fb.group({
    'id_cliente': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'edad': ['', [Validators.required]],
    'genero': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'email': ['', [Validators.required]]

  });

  title = 'dinamic-styles';
  cssUrl: string;
  cssUrl2: string;
  cssUrl3: string;
  cssUrl4: string;
  cssUrl5: string;
  cssUrl6: string;
  cssUrl7: string;
  cssUrl8: string;
  cssUrl9: string;

  constructor(public sanitizer: DomSanitizer, private fb: FormBuilder, private ServicioAsesor: AdvisorService, private router: Router) {
    this.cssUrl = `/assets/parallax/jarallax.css`;
    this.cssUrl2 = `/assets/dropdown/css/style.css`;
    this.cssUrl3 = `/assets/socicon/css/styles.css`;
    this.cssUrl4 = `/assets/theme/css/style.css`;
    this.cssUrl5 = `/assets/bootstrap/css/bootstrap-reboot.min.css`;
    this.cssUrl6 = `/assets/bootstrap/css/bootstrap-grid.min.css`;
    this.cssUrl7 = `/assets/bootstrap/css/bootstrap.min.css`;
    this.cssUrl8 = `/assets/mobirise/css/mbr-additional.css`;
    this.cssUrl9 = `/assets/vimeoplayer/player.js`;
   }

  ngOnInit(): void {
  }

  guardarAsesor(){
    let id_asesor = this.fgValidator.controls["id_asesor"].value;
    let nombres = this.fgValidator.controls["nombres"].value;
    let apellidos = this.fgValidator.controls["apellidos"].value;
    let edad = parseInt(this.fgValidator.controls["edad"].value);
    let genero = this.fgValidator.controls["genero"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    let email = this.fgValidator.controls["email"].value;
    let contrasenia = ""
    let estado =  true;
    
    let p = new ModelAdvisor();
    p.id_asesor = id_asesor;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.edad = edad;
    p.genero = genero;
    p.telefono = telefono;
    p.direccion = direccion;
    p.email = email;
    p.contrasenia = contrasenia;
    p.estado = estado;
    
    this.ServicioAsesor.CrearAsesor(p).subscribe((datos: ModelAdvisor) => {
      alert("Registro exitoso");
      //this.router.navigate(["/security/login"])
    },
    (error: any) => {
      alert("Error creando cuenta" + error.message);
    })
  }

}
