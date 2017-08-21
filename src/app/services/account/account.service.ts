import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  primary: any;
  details: any;

  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) { }

  init() {
    return new Observable( observer => {
      this.getAccount().subscribe(res => {
        this.primary = res.accounts[0];
        this.getBalance().subscribe(details => {
          this.details = details;
          observer.next();
        });
      })
    });
  }

  getAccount() {
    return this.http.get<any>(environment.monzo.api_url + 'accounts', {
      headers: new HttpHeaders().set( 'Authorization', 'Bearer ' + this.auth.token ),
    });
  }

  getBalance() {
    return this.http.get(environment.monzo.api_url + 'balance?account_id=' + this.primary.id, {
      headers: new HttpHeaders().set( 'Authorization', 'Bearer ' + this.auth.token ),
    });
  }


}
