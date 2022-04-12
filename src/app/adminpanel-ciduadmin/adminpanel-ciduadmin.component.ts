import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel-ciduadmin',
  templateUrl: './adminpanel-ciduadmin.component.html',
  styleUrls: ['./adminpanel-ciduadmin.component.css']
})
export class AdminpanelCiduadminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo:string = '../assets/Pictures/LogoNombre.png';
  section1:string = '../assets/Pictures/section1.png';
  section2:string = '../assets/Pictures/section2.jpg';
  bogmap:string = '../assets/Pictures/Bogmap.jpg';
  lupa:string = '../assets/Pictures/nuevo.jpg';
  historico:string = '../assets/Pictures/historico.jpg';
  perfil:string = '../assets/Pictures/perfil.jpg';
  tarifas:string = '../assets/Pictures/tarifas.jpg';
  salir:string = '../assets/Pictures/salir.jpg';
}
