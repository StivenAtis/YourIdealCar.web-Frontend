import { Component, OnInit } from '@angular/core';
import { ModelAdvisor } from 'src/app/models/advisor.model';
import { AdvisorService } from 'src/app/services/advisor.service';

@Component({
  selector: 'app-search-advisors',
  templateUrl: './search-advisors.component.html',
  styleUrls: ['./search-advisors.component.css']
})
export class SearchAdvisorsComponent implements OnInit {

  listadoRegistros: ModelAdvisor[] =[];
  id: string = "";

  constructor(private AsesorServicio: AdvisorService) { }

  ngOnInit(): void {
    this.ObtenerAsesor();
  }

  ObtenerAsesor(){

    this.AsesorServicio.ObtenerRegistros().subscribe((datos: ModelAdvisor[]) => {
      this.listadoRegistros = datos;
    })
  }

}
