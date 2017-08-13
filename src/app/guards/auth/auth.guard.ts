import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Auth } from '../../services/auth/auth.service'
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: Auth) { }

  canActivate() {

    return this.auth.loggedIn().map( res =>  {
      if(res) {
        return true;
      } else {
        this.auth.login();
        return false;
      }
    })
  }
}
