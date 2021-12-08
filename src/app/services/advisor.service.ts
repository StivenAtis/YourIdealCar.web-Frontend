import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelAdvisor } from '../models/advisor.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {

  url = 'http://localhost:3000'

  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SecurityService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModelAdvisor[]> {
    return this.http.get<ModelAdvisor[]>(`${this.url}/asesors`)
  }

  ObtenerRegistroPorId(id: string): Observable<ModelAdvisor> {
    return this.http.get<ModelAdvisor>(`${this.url}/asesors/${id}`)
  }

  CrearAsesor(asesor: ModelAdvisor): Observable<ModelAdvisor> {
    return this.http.post<ModelAdvisor>(`${this.url}/asesors`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarAsesor(asesor: ModelAdvisor): Observable<ModelAdvisor> {
    return this.http.put<ModelAdvisor>(`${this.url}/asesors/${asesor.id}`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarAsesor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/asesors/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
}
