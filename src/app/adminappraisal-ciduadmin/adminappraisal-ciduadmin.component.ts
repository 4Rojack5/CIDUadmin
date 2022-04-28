import { GeocoderResult } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
import { MapGeocoder, MapGeocoderResponse } from '@angular/google-maps';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { MarcadoresService } from '../servicio/marcadores.service';
import { LocationService } from '../servicio/location.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { resultado } from '../servicio/resultado';
import { flattenDiagnosticMessageText } from 'typescript';
import { CiduadminService } from 'src/app/servicio/ciduadmin.service';
import { Avaluo } from '../models/Avaluo';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  formulariores: FormGroup;
  valForm: FormControl = new FormControl();
  logo:string = '../assets/Pictures/LogoNombre.png';
  API: string="https://maps.googleapis.com/maps/api/geocode/json";
  results = "";
  mostrarError = false;
  loading  = false;
  
  cliente: string = '';
  idavaluo: string = '';
  estado: string = '';
  mes: string = '';
  tipodocumento: string = '';
  identificacion: string = '';
  nombreCliente: string = '';
  direccion: string = '';
  ciudad: string = '';
  departamento: string = '';
  ubicacion: string = '';
  latitud: string = '';
  longitud: string = '';
  barrio: string = '';
  ciudadAvaluo: string = '';
  contacto: string = '';
  telefonoContacto: string = '';
  fechaAsignacion: string = '';
  fechaAgendamiento: string = '';
  fechaVisita: string = '';
  horaVisita: string = '';
  visitador: string = '';
  pagoVisitador: string = '';
  observaciones: string = '';
  fua: string = '';
  revisionFua: string = '';
  fechaEnvio: string = '';
  valorAvaluo: string = '';
  sitio: string = '';
  tipoAvaluo: string = '';


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : departamentos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private toastr: ToastrService,
      private afAuth: AngularFireAuth,  
      private marcadoresService: MarcadoresService,
      private locationService: LocationService,
      private _ciduadminService: CiduadminService){
      this.formulariores=this.fb.group({
        estado: ['', Validators.required],
        cliente: ['', Validators.required],
        mes: ['', Validators.required],
        idavaluo: ['', Validators.required],
        tipodocumento: ['', Validators.required],
        identificacion: ['', Validators.required],
        nombreCliente: ['', Validators.required],
        direccion:['', Validators.required],
        ciudad:['', Validators.required],
        departamento:['', Validators.required],
        detallesDir:['', Validators.required],
        ubicacion:['', Validators.required],
        latitud:['', Validators.required],
        longitud:['', Validators.required],
        barrio:['', Validators.required],
        ciudadAvaluo:['', Validators.required],
        contacto:['', Validators.required],
        telefonoContacto:['', Validators.required],
        fechaAsignacion:['', Validators.required],
        fechaAgendamiento:['', Validators.required],
        fechaVisita:['', Validators.required],
        horaVisita:['', Validators.required],
        visitador:['', Validators.required],
        pagoVisitador:['', Validators.required],
        observaciones:['', Validators.required],
        fua:['', Validators.required],
        revisionFua:['', Validators.required],
        fechaEnvio:['', Validators.required],
        valorAvaluo:['', Validators.required],
        sitio:['', Validators.required],
        tipoAvaluo:['', Validators.required],
      });     
  }

  ngOnInit(): void {
  }

  validarFormulario(){
    if(this.formulariores.invalid){
      //Mostrar el error por 3 segundos
      this.mostrarError = true;
      setTimeout(() => {
        this.mostrarError = false;
      }, 5000);
    }
    else{
      this.loading = true;
      //Si el formulario es valido asigna el valor de los elementos del formulario a las variables del servicio
      const usuario: User = JSON.parse(localStorage.getItem('user') || '{}');

      const avaluo: Avaluo = {
        uid: usuario.uid,
        cliente: this.formulariores.get('cliente')?.value,
        idavaluo: this.formulariores.get('idavaluo')?.value,
        estado: this.formulariores.get('estado')?.value,
        mes: this.formulariores.get('mes')?.value,
        tipodocumento: this.formulariores.get('tipodocumento')?.value,
        identificacion: this.formulariores.get('identificacion')?.value,
        nombreCliente: this.formulariores.get('nombreCliente')?.value,
        direccion: this.formulariores.get('direccion')?.value,
        ciudad: this.formulariores.get('ciudad')?.value,
        departamento: this.formulariores.get('departamento')?.value,
        detallesDir: this.formulariores.get('detallesDir')?.value,
        ubicacion: this.formulariores.get('ubicacion')?.value,
        latitud: this.formulariores.get('latitud')?.value,
        longitud: this.formulariores.get('longitud')?.value,
        barrio: this.formulariores.get('barrio')?.value,
        ciudadAvaluo: this.formulariores.get('ciudadAvaluo')?.value,
        contacto: this.formulariores.get('contacto')?.value,
        telefonoContacto: this.formulariores.get('telefonoContacto')?.value,
        fechaAsignacion: this.formulariores.get('fechaAsignacion')?.value,
        fechaAgendamiento: this.formulariores.get('fechaAgendamiento')?.value,
        fechaVisita: this.formulariores.get('fechaVisita')?.value,
        horaVisita: this.formulariores.get('horaVisita')?.value,
        visitador: this.formulariores.get('visitador')?.value,
        pagoVisitador: this.formulariores.get('pagoVisitador')?.value,
        observaciones: this.formulariores.get('observaciones')?.value,
        fua: this.formulariores.get('fua')?.value,
        revisionFua: this.formulariores.get('revisionFua')?.value,
        fechaEnvio: this.formulariores.get('fechaEnvio')?.value,
        valorAvaluo: this.formulariores.get('valorAvaluo')?.value,
        sitio: this.formulariores.get('sitio')?.value,
        tipoAvaluo: this.formulariores.get('tipoAvaluo')?.value,
        
      }
      
      console.log(avaluo);
      this._ciduadminService.crearAvaluo(avaluo).then(data =>{
        this.toastr.success('El avalúo fue registrado con éxito', 'Avalúo Registrado');
        this.router.navigate(['/CIDUadminappraisal']);
        this.loading = false;
      }).catch(error => {
        this.loading = false;
        console.log(error);
        this.formulariores.reset();
      })
    }
  }

  validarDireccion():string{
    
    const dir = this.formulariores.get('direccion')?.value;
    const ciu = this.formulariores.get('ciudad')?.value;
    const depar = this.formulariores.get('departamento')?.value;
    const geocoder = new google.maps.Geocoder();

    const ubicacion=(dir+", "+ciu+", "+depar);

    this.formulariores.patchValue({ubicacion: ubicacion!});

    const address=this.formulariores.get('ubicacion')?.value

      geocoder.geocode( {'address':address}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK){
        if(results != null){
          const resultados = results[0].geometry.location
          const resultados_lat = resultados.lat()
          const resultados_long = resultados.lng()
          console.log(results[0].geometry.location.lat())
          console.log(results[0].geometry.location.lng())

          this.formulariores.patchValue({latitud: resultados_lat!});
          this.formulariores.patchValue({longitud: resultados_long!});

          const latitud=this.formulariores.get('latitud')?.value;
          const longitud=this.formulariores.get('longitud')?.value;
        }
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
        }
        
    } )
    return ubicacion
  }

  generarCoor():any {
    console.log("Me presionaste");
    console.log(this.formulariores.get('ubicacion')?.value);
    }


}
