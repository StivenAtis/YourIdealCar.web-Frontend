import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelIdentify } from '../models/identify.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url = 'http://localhost:3000';
  datosUsuariosEnSesion = new BehaviorSubject<ModelIdentify>(new ModelIdentify());

  constructor(private http: HttpClient) {

    this.VerificarSesionActual();
  }

   VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModelIdentify) {
    this.datosUsuariosEnSesion.next(datos);
  }

  obtenerDatosUsuarioEnSesion(){
    return this.datosUsuariosEnSesion.asObservable();
  }

  Identificar(usuario: string, clave: string): Observable<ModelIdentify> {
    return this.http.post<ModelIdentify>(`${this.url}/autenticarCliente`, {
      usuario: usuario,
      contrasenia: clave
    })
  }

  AlmacenarSesion(datos: ModelIdentify){
    datos.EstaIdentificado = true;
    let stringDatos= JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }
    else {
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModelIdentify());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

}

