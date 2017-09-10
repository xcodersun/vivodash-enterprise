import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthToken } from '../model/auth-token';
import { User } from '../model/user';
 
@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  isLogin(): boolean {
    return localStorage.getItem('authtoken') ? true : false;
  }

  login(ciphertext: string): Observable<AuthToken> {
    const url = 'http://localhost:8080/api/login';
    const headers = new Headers({'Authorization': ciphertext});
    return this.http
               .get(url, {headers: headers})
               .map(res => res.json() as AuthToken)
               .catch(res => {
                 if (res.status == 401) {
                  localStorage.removeItem('authtoken');
                 }
                 return Observable.throw(res);
               });
  }
}
