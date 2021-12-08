import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelCustomer } from '../models/customers.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'http://localhost:3000'

  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SecurityService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

   ObtenerRegistros(): Observable<ModelCustomer[]> {
    return this.http.get<ModelCustomer[]>(`${this.url}/clientes`)
  }

  ObtenerRegistroPorId(id: string): Observable<ModelCustomer> {
    return this.http.get<ModelCustomer>(`${this.url}/clientes/${id}`)
  }

  CrearAsesor(cliente: ModelCustomer): Observable<ModelCustomer> {
    return this.http.post<ModelCustomer>(`${this.url}/clientes`, cliente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarAsesor(cliente: ModelCustomer): Observable<ModelCustomer> {
    return this.http.put<ModelCustomer>(`${this.url}/clientes/${cliente.id}`, cliente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarAsesor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/clientes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
}
