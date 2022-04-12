import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Ubi } from './ubi';

@Injectable({
  providedIn: 'root'
})
export class MarcadoresService {

  API: string="http://localhost:8080/CIDUadmin/" //API php CIDUadmin (API)

  constructor(private clienteHttp:HttpClient) { }

  obtenerMarcadores(){
    return this.clienteHttp.get(this.API);
  }
}
