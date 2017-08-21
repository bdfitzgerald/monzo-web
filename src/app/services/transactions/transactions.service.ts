import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { AccountService } from '../account/account.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransactionsService {

  all: any;

  constructor(
    public http: HttpClient,
    public auth: AuthService,
    public account: AccountService
  ) {
  }

  init() {
    return new Observable( observer => {
      this.getTransactions().subscribe( res => {
        this.all = res.transactions.reverse();
        observer.next();
      });
    });
  }

  getTransactions() {
    return this.http.get<any>(environment.monzo.api_url + 'transactions?expand[]=merchant&account_id=' + this.account.primary.id, {
      headers: new HttpHeaders().set( 'Authorization', 'Bearer ' + this.auth.token ),
    });
  }

  getTransaction(id: string) {
    return this.http.get<any>(environment.monzo.api_url + 'transactions/' + id +
      '?expand[]=merchant&account_id=' + this.account.primary.id, {
      headers: new HttpHeaders().set( 'Authorization', 'Bearer ' + this.auth.token ),
    });
  }

}
