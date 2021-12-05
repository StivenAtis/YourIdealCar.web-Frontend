import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private servicioSeguridad: SecurityService, private router: Router) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion();
    this.router.navigate(['/home'])
  }

}
