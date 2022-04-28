import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Avaluo } from '../models/Avaluo';
import { Mapa } from '../models/Mapa';


@Injectable({
  providedIn: 'root'
})
export class CiduadminService {

  constructor( private _firestore: AngularFirestore) { 
  }

  crearAvaluo(avaluo: Avaluo): Promise<any>{
    return this._firestore.collection('avaluos').add(avaluo);

  }

  historicoAvaluos(): Observable<any>{
    return this._firestore.collection('avaluos').snapshotChanges();
  }

  obtenerAvaluo(){
    let datosR: any = [];
    const lectura = this._firestore.collection('avaluos').get().toPromise();

    return lectura.then(resp => {
  
    //console.log(resp.docs);
    const document = resp.docs;
    for(let object of document){
      let datos = new Mapa();
      const dts:any = object.data();
      //console.log(object.id);
      //console.log(dts);
      datos.keys=object.id;
      datos.idavaluo=dts.idavaluo;
      datos.latitud=dts.latitud;
      datos.longitud=dts.longitud;
      datosR.push(datos);
    }
    //console.log(datosR);
    return datosR;
    }).catch((error)=>{
    console.log(error);
    })
  }

}