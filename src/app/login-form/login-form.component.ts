import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { USERS } from '../users';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var usernameForm = e.target.elements[0].value;
    var passwordForm = e.target.elements[1].value;

    var authenticatedUsername = USERS.find(u => u.username === usernameForm);
    var authenticatedPassword = USERS.find(u => u.password === passwordForm);

    if (authenticatedUsername != null && authenticatedPassword != null) {
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
