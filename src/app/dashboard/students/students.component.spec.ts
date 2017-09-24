import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSource, CdkTableModule } from '@angular/cdk/table';

import { HttpWrapperService } from '../../services/http-wrapper.service';
import { MockHttpWrapperService } from '../../services/mock-http-wrapper.service';
import { MaterialModule } from '../../material.module';
import { StudentsComponent } from './students.component';
import { StudentService } from '../../services/student.service';

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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
