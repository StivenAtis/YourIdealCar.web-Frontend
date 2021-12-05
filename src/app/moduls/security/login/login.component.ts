import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityService } from 'src/app/services/security.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidator:FormGroup=this.fb.group({
    "usuario": ["", [Validators.required, Validators.email]],
    "clave": ["", [Validators.required]]
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

  constructor(public sanitizer: DomSanitizer, private fb: FormBuilder, private servicioSeguridad:SecurityService, private router: Router) { 

    
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

  IdentificarUsuario(){
    let usuario=this.fgValidator.controls["usuario"].value;
    let clave=this.fgValidator.controls["clave"].value;
    let claveCifrada=cryptoJS.MD5(clave).toString();

    //alert(claveCifrada)

    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      //alert("Datos validos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/home'])
    },(error:any)=>{
      alert("Error: " + error.error.error.message)
      console.error('An error occurred:', error.error);
    })

  }

}
