import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminbackground-ciduadmin',
  templateUrl: './adminbackground-ciduadmin.component.html',
  styleUrls: ['./adminbackground-ciduadmin.component.css']
})
export class AdminbackgroundCiduadminComponent implements OnInit {

  logo:string = '../assets/Pictures/LogoNombre.png';

  constructor() { }

  ngOnInit(): void {
  }

}

