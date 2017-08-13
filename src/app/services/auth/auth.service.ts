import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class Auth {

  private clientID: string;
  private userID: string;
  private code: string;
  private token: string;
  state: string;

  constructor(private http: Http) {
    this.state = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 22);
    this.clientID = localStorage.getItem('clientID');
    this.userID = localStorage.getItem('userID');
    this.token = localStorage.getItem('token');
  }

	loggedIn() {
		let headers = new Headers();
		headers.append( 'Authorization', 'Bearer ' + this.token );

		return new Observable(observer => {
			this.http.get(environment.monzo.api_url + 'ping/whoami', {headers: headers})
				.map(this.extractData)
				.catch(this.handleError).subscribe( res => {
				observer.next(true);
			}, err => {
				observer.next(false);
			});
		})
	}

  setCode(code) {
    this.code = code;
  }

  checkState(state) {
    return this.state = state;
  }

  login() {
    window.location.href = environment.monzo.auth_url +
      '?client_id=' + environment.monzo.client_id +
      '&redirect_uri='+ environment.monzo.redirect_uri +
      '&response_type=code' +
      '&state=' + this.state;
  }

  authenticate() {
    return new Observable(observer => {
      this.getToken().subscribe(res => {
        let data: any = res;
        localStorage.setItem('clientID', data.client_id);
        localStorage.setItem('userID', data.user_id);
        localStorage.setItem('token', data.access_token);
        observer.next(true);
      }, err => {
        console.log(err);
        observer.next(false);
      });
    });
  }

  getToken() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = 'grant_type=authorization_code' +
    '&client_id=' + environment.monzo.client_id +
    '&client_secret=' + environment.monzo.client_secret_encoded +
    '&redirect_uri=' + environment.monzo.redirect_uri_encoded +
    '&code=' + this.code;
    return this.http.post(environment.monzo.api_url + 'oauth2/token', body, {headers: headers} )
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body = res.json();
    return body || { };

  }
  private handleError (error: Response | any) {

    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
	  return Observable.throw(errMsg);

  }

}
