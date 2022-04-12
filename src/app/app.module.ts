import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminbackgroundCiduadminComponent } from './adminbackground-ciduadmin/adminbackground-ciduadmin.component';
import { AdmingestionCiduadminComponent } from './admingestion-ciduadmin/admingestion-ciduadmin.component';
import { AdminmapCiduadminComponent } from './adminmap-ciduadmin/adminmap-ciduadmin.component';
import { AdminpanelCiduadminComponent } from './adminpanel-ciduadmin/adminpanel-ciduadmin.component';
import { AdminappraisalCiduadminComponent } from './adminappraisal-ciduadmin/adminappraisal-ciduadmin.component';
import { LoginCiduadminComponent } from './login-ciduadmin/login-ciduadmin.component';
import { ProfileCiduadminComponent } from './profile-ciduadmin/profile-ciduadmin.component';
import { AdminratesCiduadminComponent } from './adminrates-ciduadmin/adminrates-ciduadmin.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/inicio', pathMatch: 'full', 
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'loginCIDUadmin',
    component: LoginCiduadminComponent,
  },
  {
    path: 'CIDUadminpanel',
    component: AdminpanelCiduadminComponent,
  },
  {
    path: 'CIDUadminmap',
    component: AdminmapCiduadminComponent,
  },
  {
    path: 'CIDUadminappraisal',
    component: AdminappraisalCiduadminComponent,
  },
  {
    path: 'CIDUadminbackground',
    component: AdminbackgroundCiduadminComponent,
  },
  {
    path: 'CIDUadmingestion',
    component: AdmingestionCiduadminComponent,
  },
  {
    path: 'CIDUadminprofile',
    component: ProfileCiduadminComponent,
  },
  {
    path: 'CIDUadminrates',
    component: AdminratesCiduadminComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarLoginComponent,
    NavbarPrincipalComponent,
    FooterComponent,
    InicioComponent,
    AdminbackgroundCiduadminComponent,
    AdmingestionCiduadminComponent,
    AdminmapCiduadminComponent,
    AdminpanelCiduadminComponent,
    AdminappraisalCiduadminComponent,
    LoginCiduadminComponent,
    ProfileCiduadminComponent,
    AdminratesCiduadminComponent
  ],
  imports: [

    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNjetUNp5vGVZkSeYt2gxm-7ct-1ppyow'
    }),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ],
    exports: [
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }