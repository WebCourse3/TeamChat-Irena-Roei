import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { USERS } from '../users';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../user';
import {SingServiceService} from '../sing-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent implements OnInit {

  loginUser2: User = {username:"", password:""};
  constructor(private login:SingServiceService) {
  }

  ngOnInit() {
  }
  submit() {
    this.login.loginUser(this.loginUser2.username,this.loginUser2.password).subscribe((res) => console.log(res));
  }
 // loginUser(e) {
 //   e.preventDefault();
  //  console.log(e);
 //   var usernameForm = e.target.elements[0].value;
  //  var passwordForm = e.target.elements[1].value;

 // this.login.loginUser(this.loginUser2.username,this.loginUser2.password);

  //  var authenticatedUsername = USERS.find(u => u.username === usernameForm);
   // var authenticatedPassword = USERS.find(u => u.password === passwordForm);

   // if (authenticatedUsername != null && authenticatedPassword != null) {
    //  this.user.setUserLoggedIn(usernameForm);

     // this.router.navigate(['dashboard']);
   // }
  }

