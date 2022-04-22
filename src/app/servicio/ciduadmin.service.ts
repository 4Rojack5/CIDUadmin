import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Avaluo } from '../models/Avaluo';


@Injectable({
  providedIn: 'root'
})
export class CiduadminService {

  constructor( private _firestore: AngularFirestore) { 
  }

  crearAvaluo(avaluo: Avaluo): Promise<any>{
    return this._firestore.collection('avaluos').add(avaluo);

  }

}