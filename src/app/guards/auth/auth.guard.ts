import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service'
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../../services/account/account.service';
import { TransactionsService } from '../../services/transactions/transactions.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public account: AccountService,
    public transactions: TransactionsService,
  ) { }

  canActivate() {

    return new Observable<boolean>( authorised => {
      this.auth.loggedIn().subscribe( loggedIn =>  {
        if ( loggedIn ) {
          this.account.init().subscribe( () => {
            this.transactions.init().subscribe( () => {
              authorised.next(true);
            });
          });
        } else {
          console.log('false');
          this.auth.login();
          authorised.next(false)
        }
      }, () => {
        console.log('error');
        this.auth.login();
        authorised.next(false);
      } )
    } )
  }
}
