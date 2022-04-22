import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-ciduadmin',
  templateUrl: './profile-ciduadmin.component.html',
  styleUrls: ['./profile-ciduadmin.component.css']
})
export class ProfileCiduadminComponent implements OnInit {

  logo:string = '../assets/Pictures/LogoNombre.png';

  constructor() { }

  ngOnInit(): void {
  }

}
