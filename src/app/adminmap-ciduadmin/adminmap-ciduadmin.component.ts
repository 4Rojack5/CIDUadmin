import { Component, OnInit } from '@angular/core';

import { MarcadoresService } from '../servicio/marcadores.service';

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
  
  constructor(private marcadoresService:MarcadoresService) { 
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
    this.marcadoresService.obtenerMarcadores().subscribe(respuesta=>{
      console.log(respuesta);
      this.Marcadores=respuesta;
    });
    
  };

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


}
