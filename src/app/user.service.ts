import { Injectable } from '@angular/core';
import { USERS } from './users';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(userName) {
    this.isUserLoggedIn = true;
    this.username = userName;
  }


  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
