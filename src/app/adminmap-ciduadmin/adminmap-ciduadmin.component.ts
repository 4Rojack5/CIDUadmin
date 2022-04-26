import { Component, OnInit } from '@angular/core';

import { Avaluo } from '../models/Avaluo';
import { MarcadoresService } from '../servicio/marcadores.service';
import { CiduadminService } from '../servicio/ciduadmin.service';

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
  iconMap ={
    iconUrl:'../assets/Pictures/markerHouse.png'
  }
  located: boolean = false;
  animation: string;
  zoomControl: boolean;
  scaleControl: boolean;
  mapTypeControl: boolean;
  fullscreenControl: boolean;
  panControl: boolean;
  Marcadores:any;

  historico: Avaluo[] = [];
  loading  = false;
  
  constructor(private marcadoresService:MarcadoresService,
              private _ciduadmin: CiduadminService) { 
    this.lat = 4.656453;
    this.lng = -74.122186;
    this.zoom = 12;
    this.mapTypeId = 'hybrid';
    this.animation = "'BOUNCE'";
    this.located = false;
    this.zoomControl = true;
    this.scaleControl = true;
    this.mapTypeControl = true;
    this.fullscreenControl = true;
    this.panControl = true;
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
        console.log(this.historico);
      }
    );
  }

  enviarDatos():any {
    console.log("Me presionaste");
    }
  
  getOriginalPosition(): void{
    navigator.geolocation.getCurrentPosition(position =>{
      this.lat = 4.656453;
      this.lng = -74.122186;
      this.zoom = 12;
      this.mapTypeId = 'hybrid';
      this.located = false;
      this.animation = "'BOUNCE'";
    })
  }
 
  getCurrentPosition(): void{
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    }) 

  }

  SearchAppraisal(): void{
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    }) 

  }


}
