import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSource, CdkTableModule } from '@angular/cdk/table';

import { HttpWrapperService } from '../../services/http-wrapper.service';
import { MockHttpWrapperService } from '../../services/mock-http-wrapper.service';
import { MaterialModule } from '../../material.module';
import { StudentsComponent } from './students.component';
import { StudentService } from '../../services/student.service';
import { MOCKSTUDENTDATA } from '../../test-data/mock-student-data';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CdkTableModule,
        MaterialModule,
      ],
      declarations: [ StudentsComponent ],
      providers: [
        { provide: HttpWrapperService, useClass: MockHttpWrapperService },
        StudentService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show list of students by default', () => {
    component.ngOnInit();
    let nativeElement = fixture.nativeElement;
    let tables = nativeElement.querySelectorAll('md-table');
    // Expect one talbe
    expect(tables.length).toBe(1);

    let studentData = MOCKSTUDENTDATA.json();
    // The table has one header and three rows of student data.
    expect(tables[0].children.length).toBe(1 + studentData.length);

    // The table header has 4 columns.
    let tableHeader = tables[0].children[0];
    let tableHeaderColumns = tableHeader.children;
    expect(tableHeaderColumns.length).toBe(component.displayedColumns.length);
    let idToContextMap = {};
    idToContextMap['student_id'] = '学号';
    idToContextMap['name'] = '姓名';
    idToContextMap['age'] = '年龄';
    idToContextMap['projects'] = '项目';
    for (var column of component.displayedColumns) {
      let cells = tableHeader.querySelectorAll('.cdk-column-'+column);
      expect(cells.length).toBe(1);
      expect(cells[0].innerHTML.trim()).toEqual(idToContextMap[column]);
    }
    for (var i = 1, j = 0; i < tables[0].children.length ; i++, j++) {
      let studentRow = tables[0].children[i];
      let studentRowColums = studentRow.children;
      expect(studentRowColums.length).toBe(component.displayedColumns.length);
      let studentDataKeyToValueMap = {};
      for (var key in studentData[j]) {
        let cells = studentRow.querySelectorAll('.cdk-column-'+key);
        if (key != 'projects') {
          expect(cells.length).toBe(1);
          expect(cells[0].innerHTML.trim()).toEqual(studentData[j][key].toString());
        } else {
          let projects = studentData[j][key];
          for (var project of projects) {
            expect(cells[0].innerHTML.trim()).toEqual(project.name);
          }
        }
      }
    }
  });
});
