import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicio/error.service';

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
  loading = false;
 
  constructor( private fb: FormBuilder,
               private afAuth: AngularFireAuth,
               private _errorService: ErrorService,
               private toastr: ToastrService,
               private router: Router ){ 
    this.recuperarForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  recuperarPassword(){
    //Obtener el correo
    const correo = this.recuperarForm.get('user')?.value;
    this.loading = true;

    this.afAuth.sendPasswordResetEmail(correo).then(() => {
      this.toastr.info('Enviamos un correo electrónico para restablecer tu contraseña', 'Restablecer Password');
      this.router.navigate(['/loginCIDUadmin']);
      this.loading = false;
    }).catch( error => {
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code), 'Error');
      this.recuperarForm.reset();
    })
  }

}
