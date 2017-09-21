import { ReflectiveInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  RequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpWrapperService } from './http-wrapper.service';

describe('HttpWrapperService', () => {
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions},
        { provide: Router, useValue: router},
        Http,
        HttpWrapperService,
      ]
    });

    this.httpWrapperService = TestBed.get(HttpWrapperService);
    this.mockBackend = TestBed.get(ConnectionBackend) as MockBackend;
    this.mockBackend.connections.subscribe(
      (connection: any) => this.lastConnection = connection
    );
  });

  it('should return 3 students', () => {
    const mockResponse = {
      data: [
        { id: 1, name: 'alex', age: 10},
        { id: 2, name: 'bill', age: 11},
        { id: 3, name: 'charles', age: 12},
      ]
    };
    this.httpWrapperService.httpGet('testData').subscribe((resp) => {
      var students = resp.json().data;
      expect(students.length).toBe(3);
      expect(students[0].id).toEqual(1, 'First student should have id 1');
      expect(students[0].name).toEqual('alex', 'First student should have name alex');
      expect(students[0].age).toEqual(10, 'First student should have age 10');
      expect(students[1].id).toEqual(2, 'First student should have id 1');
      expect(students[1].name).toEqual('bill', 'First student should have name alex');
      expect(students[1].age).toEqual(11, 'First student should have age 10');
      expect(students[2].id).toEqual(3, 'First student should have id 1');
      expect(students[2].name).toEqual('charles', 'First student should have name alex');
      expect(students[2].age).toEqual(12, 'First student should have age 10');
    });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockResponse),
    })));
  });

  it('should redirect to /login', () => {
    this.httpWrapperService.httpGet('redirect').subscribe(
      () => {},
      (error) => {
        expect(error.status).toEqual(401);
      }
    );
    this.lastConnection.mockError(new Response(new ResponseOptions({
      status: 401,
    })));
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
