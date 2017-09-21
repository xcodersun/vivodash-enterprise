import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MOCKSTUDENTDATA } from '../test-data/mock-student-data';
import { MOCKCOACHDATA } from '../test-data/mock-coach-data';

/**
 * This is the mock class for MockHttpWrapperService
 */
@Injectable()
export class MockHttpWrapperService {
  constructor(
  ) {  }

  httpGet(url: string): Observable<any> {
    var _url = new URL(url);
    var res = {
      json: function() {
        return [];
      }
    };
    switch (_url.pathname) {
      case '/api/students':
        res = MOCKSTUDENTDATA;
        break;
      case '/api/coaches':
        res = MOCKCOACHDATA;
        break;
    }
    return Observable.of(res);
  }
}
