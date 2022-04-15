import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { MarcadoresService } from '../servicio/marcadores.service';
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

  datos1 = 
  {
  dir: '',
  ciu: '',
  dep: '',
  }

  

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : departamentos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )


  constructor(
      private fb:FormBuilder,  
      private marcadoresService:MarcadoresService){

      this.formulariores=this.fb.group({
        direccion:[''],
        ciudad:[''],
        departamento:[''],
        resultado:['']
      });
    }



  ngOnInit(): void {
  }

  enviarDatos():string{
    const dir = this.formulariores.get('direccion')?.value;
    const ciu = this.formulariores.get('ciudad')?.value;
    const depar = this.formulariores.get('departamento')?.value;

    const resultado=(dir+", "+ciu+", "+depar);
    this.formulariores.patchValue({resultado: resultado});
    return resultado;
  }

  validarDatos():any {
    console.log("Me presionaste");
    console.log(this.formulariores.value);
    }

}
