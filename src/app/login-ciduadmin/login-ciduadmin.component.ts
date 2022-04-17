import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicio/error.service';

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
    loading  = false;

    constructor( private fb: FormBuilder,
                 private afAuth: AngularFireAuth,
                 private _errorService: ErrorService,
                 private toastr: ToastrService,
                 private router: Router ){ 
      this.loginForm = this.fb.group({
        user: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
    }

    login(){
      console.log(this.loginForm);
      const usuario = this.loginForm.get('user')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loading = true;

      this.afAuth.signInWithEmailAndPassword(usuario, password).then( respuesta => {
        console.log(respuesta);
        this.toastr.success('Ingreso exitoso', 'Usuario valido');
        this.router.navigate(['/CIDUadminpanel']);
        this.loading = false;
      }).catch( error => {
        this.loading = false;
        this.toastr.error(this._errorService.error(error.code), 'Error');
        this.loginForm.reset();
      })

    }

  ngOnInit(): void {
  }

  logo:string = '../assets/Pictures/LogoNombre.png';
  section1:string = '../assets/Pictures/section1.png';
  section2:string = '../assets/Pictures/section2.jpg';

}
