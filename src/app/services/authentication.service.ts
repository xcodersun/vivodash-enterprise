import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthToken } from '../model/auth-token';
import { HttpWrapperService } from './http-wrapper.service';
import { User } from '../model/user';

@Injectable()
export class AuthenticationService {
  constructor(private _httpWrapper: HttpWrapperService,) { }

  isLogin(): boolean {
    return localStorage.getItem('authtoken') ? true : false;
  }

  login(ciphertext: string): Observable<AuthToken> {
    const url = 'http://localhost:8080/api/login';
    return this._httpWrapper
      .httpAuth(url, ciphertext)
      .map(res => res.json());
  }
}
