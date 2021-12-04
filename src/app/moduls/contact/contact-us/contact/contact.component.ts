import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  constructor(public sanitizer: DomSanitizer) {
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

}
