import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
    return false;
  }

  login(ciphertext: string): Promise<AuthToken> {
    const url = 'http://localhost:8080/api/login';
    const headers = new Headers({'Authorization': ciphertext});
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(res => res.json() as AuthToken)
               .catch(this.handleError);
  }
}