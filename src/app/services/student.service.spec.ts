import { TestBed, inject } from '@angular/core/testing';

import { HttpWrapperService } from './http-wrapper.service';
import { MockHttpWrapperService } from './mock-http-wrapper.service';
import { MOCKSTUDENTDATA } from '../test-data/mock-student-data';
import { StudentService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpWrapperService, useClass: MockHttpWrapperService },
        StudentService,
      ]
    });
  });

  it('should return 3 students',
    inject([StudentService], (_studentService: StudentService) => {
      _studentService.getStudents()
      .subscribe(res => {
        var expectedStudentData = MOCKSTUDENTDATA.json()
        expect(res.length).toBe(expectedStudentData.length);
        for (var _i = 0; _i < res.length; _i++) {
          expect(res[_i].student_id).toEqual(expectedStudentData[_i].student_id);
          expect(res[_i].student_name).toEqual(expectedStudentData[_i].student_name);
          expect(res[_i].age).toEqual(expectedStudentData[_i].age);
        }
      });
  }));
});
