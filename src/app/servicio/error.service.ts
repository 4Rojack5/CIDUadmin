import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error(code: string): string{
    
    switch (code){
  
    //Email ya registrado
    case 'auth/email-already-in-use':
      return 'El correo ya está registrado'
  
    //Correo invalido
    case 'auth/invalid-email':
      return 'El correo es invalido'
  
    //La contraseña es muy débil
    case 'auth/wak-password':
      return 'La contraseña es muy débil'

    //El correo no existe
    case 'auth/user-not-found':
      return 'El usuario no existe'

    //Contraseña incorrecta
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta'
      
    default:
      return 'Error desconocido';
    }
  }

}