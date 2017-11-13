import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { USERS } from '../users';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SignupFormComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
  }
  ngOnInit() {
  }
  formResults = "";
  isValid = null;
  registerUser(e) {
    e.preventDefault();
    console.log(e);
    var usernameForm = e.target.elements[0].value;
    var passwordForm = e.target.elements[1].value;
    var repasswordForm = e.target.elements[2].value;

    var authenticatedUsername = USERS.find(u => u.username === usernameForm);
    var authenticatedPassword = false;
    if (passwordForm === repasswordForm) {
      authenticatedPassword = true;
    }

    if (authenticatedUsername == null && authenticatedPassword) {
      var newUser = {username: usernameForm, password: passwordForm, permission: 'standard'}
      USERS.push(newUser);
      this.formResults = "User is created. Go to login page.";
      this.isValid = true;
      this.router.navigate(['dashboard']);
    }
    else {
      this.formResults = "Username already exists or passwords not match";
      this.isValid = false;
    }
  }
}
