import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Coach } from '../model/coach';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable()
export class CoachService {
  constructor(
    private _httpWrapper: HttpWrapperService,
  ) { }

  getCoaches(): Observable<Coach[]> {
    const url = 'http://localhost:8080/api/coaches';
    return this._httpWrapper
      .httpGet(url)
      .map(res => res.json());
  }
}
