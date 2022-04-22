import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
