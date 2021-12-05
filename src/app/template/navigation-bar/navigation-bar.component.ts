import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ModelIdentify } from 'src/app/models/identify.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

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

  constructor(private seguridadServicio: SecurityService, public sanitizer: DomSanitizer) {
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
    this.subs = this.seguridadServicio.obtenerDatosUsuarioEnSesion().subscribe((datos: ModelIdentify) => {
      this.seInicioSesion = datos.EstaIdentificado;
    })
  }

}
