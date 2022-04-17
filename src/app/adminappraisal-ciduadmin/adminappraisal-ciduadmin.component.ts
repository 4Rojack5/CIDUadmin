import { GeocoderResult } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MapGeocoder, MapGeocoderResponse } from '@angular/google-maps';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { MarcadoresService } from '../servicio/marcadores.service';
import { LocationService } from '../servicio/location.service';
import { resultado } from '../servicio/resultado';

const departamentos = 
  [
  'Amazonas', 'Antioquia', 'Arauca', 'Atlántico','Bogotá', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander','Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés','Vichada'
  ];

@Component({
  selector: 'app-adminappraisal-ciduadmin',
  templateUrl: './adminappraisal-ciduadmin.component.html',
  styleUrls: ['./adminappraisal-ciduadmin.component.css']
})
export class AdminappraisalCiduadminComponent implements OnInit {

  formulariores:FormGroup;
  valForm: FormControl = new FormControl();
  logo:string = '../assets/Pictures/LogoNombre.png';
  API: string="https://maps.googleapis.com/maps/api/geocode/json";
  results?:string;




  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : departamentos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )


  constructor(
      private fb:FormBuilder,  
      private marcadoresService:MarcadoresService,
      private locationService:LocationService){
      this.formulariores=this.fb.group({
        direccion:[''],
        ciudad:[''],
        departamento:[''],
        resultado:[''],
        latitud:[''],
        longitud:['']
      });
    }
  ngOnInit(): void {
  }

  enviarDatos():string{
    const dir = this.formulariores.get('direccion')?.value;
    const ciu = this.formulariores.get('ciudad')?.value;
    const depar = this.formulariores.get('departamento')?.value;
    const geocoder = new google.maps.Geocoder();

    const resultado=(dir+", "+ciu+", "+depar);

    this.formulariores.patchValue({resultado: resultado!});

    const address=this.formulariores.get('resultado')?.value

      geocoder.geocode( {'address':address}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK){
        const resultados = results[0].geometry.location
        const resultados_lat = resultados.lat()
        const resultados_long = resultados.lng()
        console.log(results[0].geometry.location.lat())
        console.log(results[0].geometry.location.lng())

        this.formulariores.patchValue({latitud: resultados_lat!});
        this.formulariores.patchValue({longitud: resultados_long!});

    const latitud=this.formulariores.get('latitud')?.value;
    const longitud=this.formulariores.get('longitud')?.value;
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
        }
        
    } )
    return resultado
  }

  generarCoor():any {
    console.log("Me presionaste");
    console.log(this.formulariores.get('resultado')?.value);
    }

}
