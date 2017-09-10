import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthToken } from '../model/auth-token';
import { User } from '../model/user';
 
@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  isLogin(): boolean {
    if (localStorage.getItem('authtoken')) {
      return true;
    } else {
      return false;
    }
  }

  login(ciphertext: string): Observable<AuthToken> {
    const url = 'http://localhost:8080/api/login';
    const headers = new Headers({'Authorization': ciphertext});
    return this.http
               .get(url, {headers: headers})
               .map(res => res.json() as AuthToken);
  }
}
