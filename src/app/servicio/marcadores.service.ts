import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Ubi } from './ubi';
import { resultado } from './resultado';

@Injectable({
  providedIn: 'root'
})
export class MarcadoresService {

  API: string="http://localhost:8080/CIDUadmin/"; //API php CIDUadmin (API)

  constructor(private clienteHttp:HttpClient) { }

  agregarCampo(datos:resultado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datos);
  }

  obtenerMarcadores(){
    return this.clienteHttp.get(this.API);
  }
}
