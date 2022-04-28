import { Component, OnInit } from '@angular/core';
import { Avaluo } from '../models/Avaluo';
import { CiduadminService } from '../servicio/ciduadmin.service';
import * as FileSaver from 'file-saver';

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

  exportExcel(){
    if (this.historico.length > 0) {
      import("xlsx").then(xlsx => {
        const myHeader = ["estado", "cliente", "mes", "idavaluo", "tipodocumento", "identificacion", "nombreCliente", "ubicacion", "detallesDir", "barrio", "ciudadAvaluo", "contacto", "telefonoContacto", "fechaAsignacion", "fechaAgendamiento", "fechaVisita", "horaVisita", "visitador", "pagoVisitador", "observaciones", "fua", "revisionFua", "fechaEnvio", "valorAvaluo", "sitio", "tipoAvaluo", "id", "uid", "direccion", "ciudad", "departamento", "latitud", "longitud"];
        const worksheet = xlsx.utils.json_to_sheet(this.historico, {header: myHeader});
        const workbook = { Sheets: { 'AVALUOS': worksheet }, SheetNames: ['AVALUOS'] };

        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        
        this.saveAsExcelFile(excelBuffer, "Reporte Avaluos");
      });
    }
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_extraido_' + new Date() + EXCEL_EXTENSION);
  }

  }
