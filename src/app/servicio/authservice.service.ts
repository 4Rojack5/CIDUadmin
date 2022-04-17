import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  get isLogged() {
    return localStorage.getItem('TOKEN') && localStorage.gettem('EXPIRE_IN');
  }
}