import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * The main purpose of http wrapper service is to
 *   - add authentication headers to the request.
 *   - handler the errors from the response.
 * Also it provides explicit API for http methods:
 *   - httpGet(url: string)
 */
@Injectable()
export class HttpWrapperService {
  constructor(
    private http: Http,
    private router: Router,
  ) {  }

  httpGet(url: string): Observable<any> {
    var headers = new Headers({'Authentication': localStorage.getItem('authtoken')});
    return this.http
      .get(url, {headers: headers})
      .map(res => res)
      .catch(res => {
        if (res.status === 401) {
          localStorage.removeItem('authtoken');
          this.router.navigate(['/login']);
        }
        return Observable.throw(res);
      });
  }

  httpAuth(url: string, authorization: string): Observable<any> {
    const headers = new Headers({'Authorization': authorization});
    return this.http
      .get(url, {headers: headers})
      .map(res => res)
      .catch(res => {
        if (res.status === 401) {
          localStorage.removeItem('authtoken');
        }
        return Observable.throw(res);
      });
  }
}
