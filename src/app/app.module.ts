import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
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
import { ForgotCiduadminComponent } from './forgot-ciduadmin/forgot-ciduadmin.component';
import { VerificationemailCiduadminComponent } from './verificationemail-ciduadmin/verificationemail-ciduadmin.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
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
  {
    path: 'forgotCIDUadmin',
    component: ForgotCiduadminComponent,
  },
  {
    path: 'verificationCIDUadmin',
    component: VerificationemailCiduadminComponent,
  },
  { 
    path: '**', 
    redirectTo: '/inicio', pathMatch: 'full', 
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
    AdminratesCiduadminComponent,
    ForgotCiduadminComponent,
    VerificationemailCiduadminComponent,
    SpinnerComponent
  ],
  imports: [
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0wrxzoehl95y2FWN8YWVJSahb4dY_ols'
    }),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot([
      {
        path: 'CIDUadminpanel',
        component: AdminpanelCiduadminComponent,
        canActivate: [AuthenticationGuard]
      }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    ],
    exports: [
    RouterModule
    ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }