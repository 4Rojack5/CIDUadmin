import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-ciduadmin',
  templateUrl: './forgot-ciduadmin.component.html',
  styleUrls: ['./forgot-ciduadmin.component.css']
})
export class ForgotCiduadminComponent implements OnInit {

  logo:string = '../assets/Pictures/LogoNombre.png';
  ubi:string = '../assets/Pictures/ubi.png';
  ubipro:string = '../assets/Pictures/ubipro.png';
  his:string = '../assets/Pictures/His.png';
  raisal:string = '../assets/Pictures/searchraisal.png';

  user = "";
  recuperarForm: FormGroup;
 
  constructor( private fb: FormBuilder ){ 
    this.recuperarForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  recuperarPassword(){

  }

}
