import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  private clientID: string;
  private userID: string;
  private code: string;
  public token: string;
  state: string;

  constructor(private http: HttpClient) {
    this.getUser();
  }

  getUser(): void {
    this.clientID = localStorage.getItem('clientID');
    this.userID = localStorage.getItem('userID');
    this.token = localStorage.getItem('token');
  }

  setUser(data: any): void {
    localStorage.setItem('clientID', data.client_id);
    localStorage.setItem('userID', data.user_id);
    localStorage.setItem('token', data.access_token);
    this.getUser();
  }

  loggedIn(): Observable<boolean> {

    return new Observable<boolean>(observer => {
      this.http.get<any>(environment.monzo.api_url + 'ping/whoami', {
        headers: new HttpHeaders().set( 'Authorization', 'Bearer ' + this.token ),
      }).subscribe( check => {
        observer.next(check.authenticated);
        this.state = null;
        localStorage.setItem('state', this.state);
      }, err => {
        observer.next(false);
      });
    })
  }

  setCode(code): void {
    this.code = code;
  }

  checkState(state): boolean {
   return true
  }

  login(): void {
    this.state = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 22);
    localStorage.setItem('state', this.state);
    window.location.href = environment.monzo.auth_url +
      '?client_id=' + environment.monzo.client_id +
      '&redirect_uri=' + environment.monzo.redirect_uri +
      '&response_type=code' +
      '&state=' + this.state;
    console.log(this)
  }

  authenticate(): Observable<boolean> {
    return new Observable(observer => {
      this.getToken().subscribe(res => {
        console.log(res);
        this.setUser( res );
        observer.next(true);
      }, err => {
        console.log(err);
        observer.next(false);
      });
    });
  }

  getToken(): Observable<any> {
    const body = 'grant_type=authorization_code' +
    '&client_id=' + environment.monzo.client_id +
    '&client_secret=' + environment.monzo.client_secret_encoded +
    '&redirect_uri=' + environment.monzo.redirect_uri_encoded +
    '&code=' + this.code;
    return this.http.post(environment.monzo.api_url + 'oauth2/token', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }

}
