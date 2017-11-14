import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AppComponent }         from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { AlertModule } from 'ngx-bootstrap';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StandartRoomComponent } from './standart-room/standart-room.component';
import { SingServiceService } from './sing-service.service';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent

  },
  {
    path: 'signup',
    component: SignupFormComponent

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    SignupFormComponent,
    StandartRoomComponent
  ],
  providers: [UserService, AuthguardGuard,SingServiceService,HttpClient],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
