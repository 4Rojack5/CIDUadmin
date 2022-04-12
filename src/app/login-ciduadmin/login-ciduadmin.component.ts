import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ciduadmin',
  templateUrl: './login-ciduadmin.component.html',
  styleUrls: ['./login-ciduadmin.component.css']
})
export class LoginCiduadminComponent implements OnInit {

  constructor(    
    private http:HttpClient,
    private router:Router
    ) { }

    user = "";
    password = "";
    url = "http://localhost:8012/APPraisalDB/loginDB.php"

    UserAccess(){
    //console.log(this.user);
    //console.log(this.password);
    const loginDB = { "user":this.user, "password":this.password }
    this.http.post(this.url, JSON.stringify(loginDB)).subscribe(data=>{
      if(data == 1){
        this.router.navigate(["/adminpanel-ciduadmin"]);
      }
      else{
        console.log("Prueba incorrecta por consola");
      }
    })
    }

  ngOnInit(): void {
  }

  logo:string = '../assets/Pictures/LogoNombre.png';
  section1:string = '../assets/Pictures/section1.png';
  section2:string = '../assets/Pictures/section2.jpg';

}
