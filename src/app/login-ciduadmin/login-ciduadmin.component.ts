import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ciduadmin',
  templateUrl: './login-ciduadmin.component.html',
  styleUrls: ['./login-ciduadmin.component.css']
})
export class LoginCiduadminComponent implements OnInit {

  user = "";
    usuario = "Ingresa tu usuario"; //Uso de Property Binding
    password = "";
    contrasena ="Ingresa tu contraseña"; //Uso de Property Binding
    error = false;   //Uso de two way data-binding
    url = "http://localhost:8012/APPraisalDB/loginDB.php"
    loginForm: FormGroup;

    constructor( private fb: FormBuilder ){ 
      this.loginForm = this.fb.group({
        user: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
    }

    login(){
      console.log(this.loginForm);
    }

  ngOnInit(): void {
  }

  logo:string = '../assets/Pictures/LogoNombre.png';
  section1:string = '../assets/Pictures/section1.png';
  section2:string = '../assets/Pictures/section2.jpg';

}
