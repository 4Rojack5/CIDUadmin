import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adminpanel-ciduadmin',
  templateUrl: './adminpanel-ciduadmin.component.html',
  styleUrls: ['./adminpanel-ciduadmin.component.css']
})
export class AdminpanelCiduadminComponent implements OnInit, OnDestroy {

  suscriptionUser: Subscription = new Subscription();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.suscriptionUser = this.afAuth.user.subscribe(user =>{
      if(user){

      }else{
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
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
