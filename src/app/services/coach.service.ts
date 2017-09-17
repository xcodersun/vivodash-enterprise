import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Coach } from '../model/coach';

@Injectable()
export class CoachService {
  constructor(
    private http: Http,
    private router: Router,
  ) { }

  getCoaches(): Observable<Coach[]> {
    const headers = new Headers({'Authentication': localStorage.getItem('authtoken')});
    const url = 'http://localhost:8080/api/coaches';
    return this.http
               .get(url, {headers: headers})
               .map(res => res.json())
               .catch(res => {
                 if (res.status === 401) {
                   localStorage.removeItem('authtoken');
                   this.router.navigate(['/login']);
                  }
                  return Observable.throw(res);
              });
  }
}
