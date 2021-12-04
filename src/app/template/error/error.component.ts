import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  title = 'dinamic-styles';
  cssUrl: string;

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = `/assets/Error/style.css`;
   }

  ngOnInit(): void {
  }

}
