import { Component, OnInit } from '@angular/core';
import { Avaluo } from '../models/Avaluo';
import { CiduadminService } from '../servicio/ciduadmin.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-adminbackground-ciduadmin',
  templateUrl: './adminbackground-ciduadmin.component.html',
  styleUrls: ['./adminbackground-ciduadmin.component.css']
})
export class AdminbackgroundCiduadminComponent implements OnInit {

  historico: Avaluo[] = [];
  loading  = false;

  logo:string = '../assets/Pictures/LogoNombre.png';

  constructor(private _ciduadmin: CiduadminService) { }

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



}

