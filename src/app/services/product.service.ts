import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelProduct } from '../models/product.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000'

  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SecurityService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>(`${this.url}/vehiculos`)
  }

  ObtenerRegistroPorId(id: string): Observable<ModelProduct> {
    return this.http.get<ModelProduct>(`${this.url}/vehiculos/${id}`)
  }

  CrearProducto(producto: ModelProduct): Observable<ModelProduct> {
    return this.http.post<ModelProduct>(`${this.url}/vehiculos`, producto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProducto(producto: ModelProduct): Observable<ModelProduct> {
    return this.http.put<ModelProduct>(`${this.url}/vehiculos/${producto.id}`, producto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/vehiculos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
}
