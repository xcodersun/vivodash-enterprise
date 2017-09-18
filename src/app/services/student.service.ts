import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Student } from '../model/student';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable()
export class StudentService {
  constructor(
    private _httpWrapper: HttpWrapperService,
  ) { }

  getStudents(): Observable<Student[]> {
    const url = 'http://localhost:8080/api/students';
    return this._httpWrapper
      .httpGet(url)
      .map(res => {
        console.log(res)
        return res.json()
      });
  }
}
