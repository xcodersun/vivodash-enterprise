import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StudentService {
  constructor(private http: Http) { }
  
  getStudents() {
    const url = 'http://localhost:8080/api/students';
    return this.http
               .get(url)
               .map(res => res.json())
               .catch(res => {
                 if (res.status == 401) {
                   localStorage.removeItem('authtoken');
                  }
                  return Observable.throw(res);
                });
    }
}
