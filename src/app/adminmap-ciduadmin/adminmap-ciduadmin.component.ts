import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Avaluo } from '../models/Avaluo';
import { Mapa } from '../models/Mapa';
import { MarcadoresService } from '../servicio/marcadores.service';
import { CiduadminService } from '../servicio/ciduadmin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminmap-ciduadmin',
  templateUrl: './adminmap-ciduadmin.component.html',
  styleUrls: ['./adminmap-ciduadmin.component.css']
})

export class AdminmapCiduadminComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  logo:string = '../assets/Pictures/LogoNombre.png';
  ubi:string = '../assets/Pictures/ubi.png';
  ubipro:string = '../assets/Pictures/ubipro.png';
  his:string = '../assets/Pictures/His.png';
  raisal:string = '../assets/Pictures/searchraisal.png';
  iconMap = '../assets/Pictures/markerHouse.png';
  located: boolean = false;
  animation: string;
  zoomControl: boolean;
  scaleControl: boolean;
  mapTypeControl: boolean;
  fullscreenControl: boolean;
  panControl: boolean;
  Marcadores:any;

  historico: Avaluo[] = [];
  tablas: any = [];
  loading  = false;

  formMapa: FormGroup;
  idavaluo: string = '';
  latitud: string = '';
  longitud: string = '';
  
  constructor(private marcadoresService:MarcadoresService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private afAuth: AngularFireAuth,
              private _firestore: AngularFirestore,
              private _ciduadmin: CiduadminService,) { 
    this.lat = 4.656453;
    this.lng = -74.122186;
    this.zoom = 10.7;
    this.mapTypeId = 'roadmap';
    this.animation = "'BOUNCE'";
    this.located = false;
    this.zoomControl = true;
    this.scaleControl = true;
    this.mapTypeControl = true;
    this.fullscreenControl = true;
    this.panControl = true;
    this.iconMap = '../assets/Pictures/markerHouse.png';
    this.formMapa=this.fb.group({
      idavaluo: ['', Validators.required],
      latitud: [''],
      longitud: [''],
    }); 
    
  }

  ngOnInit(): void {
    this.loading = true;
    this._ciduadmin.historicoAvaluos().subscribe(data =>{
      this.loading = false;
      this.historico = [];
        data.forEach((element: any) => {
          this.historico.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });

      }
      
    );
  }
  
  getOriginalPosition(): void{
    navigator.geolocation.getCurrentPosition(position =>{
      this.lat = 4.656453;
      this.lng = -74.122186;
      this.zoom = 10.7;
      this.mapTypeId = 'hybrid';
      this.located = false;
      this.animation = "'BOUNCE'";
      this.iconMap = '../assets/Pictures/markerHouse.png';
    })
  }
 
  getCurrentPosition(): void{
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
      this.iconMap = '../assets/Pictures/person.png';
    }) 

  }

  SearchAppraisal() {
      const mapa : Mapa = {
        idavaluo: this.formMapa.get('idavaluo')?.value,
        latitud: '',
        longitud: ''
      }
      //console.log(mapa, "hola bb");
      let resp:string[] = [

      ];
      
      this._ciduadmin.obtenerAvaluo().then(resp => {
        this.tablas = resp;
        //console.log(resp, 'resp');
          for(let idavaluo of Object.keys(this.tablas)){
            const codigos1 = this.tablas[idavaluo];
            //console.log(codigos1, 'id Avaluos');
            for (let idavaluo of Object.keys(codigos1)){
              const codigos2 = codigos1[idavaluo];
              console.log(idavaluo,": ",codigos2);

              if(mapa.idavaluo === codigos2){
                //console.log(codigos2, mapa.idavaluo, 'hola bb lo logramos');
              }
            }
        }
      });
  }
}

