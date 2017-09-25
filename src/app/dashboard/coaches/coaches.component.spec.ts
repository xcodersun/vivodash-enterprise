import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSource, CdkTableModule } from '@angular/cdk/table';

import { CoachTitlePipe } from '../../custom-pipes/coach-title.pipe';
import { CoachStatusPipe } from '../../custom-pipes/coach-status.pipe';
import { CustomPipesModule } from '../../custom-pipes/custom-pipes.module';
import { HttpWrapperService } from '../../services/http-wrapper.service';
import { MockHttpWrapperService } from '../../services/mock-http-wrapper.service';
import { MaterialModule } from '../../material.module';
import { CoachService } from '../../services/coach.service';
import { MOCKCOACHDATA } from '../../test-data/mock-coach-data';
import { CoachesComponent } from './coaches.component';

describe('CoachesComponent', () => {
  let component: CoachesComponent;
  let fixture: ComponentFixture<CoachesComponent>;
  let coachData = MOCKCOACHDATA.json();
  let coachTitlePipe: CoachTitlePipe;
  let coachStatusPipe: CoachStatusPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CdkTableModule,
        CustomPipesModule,
        MaterialModule,
      ],
      declarations: [ CoachesComponent ],
      providers: [
        { provide: HttpWrapperService, useClass: MockHttpWrapperService },
        CoachService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    coachTitlePipe = new CoachTitlePipe();
    coachStatusPipe = new CoachStatusPipe();
  });

  it('show list of coaches by default', () => {
    component.ngOnInit();
    let nativeElement = fixture.nativeElement;
    let tables = nativeElement.querySelectorAll('md-table');
    // Expect one table
    expect(tables.length).toBe(1);

    // The table has one header and three rows of coach data.
    expect(tables[0].children.length).toBe(1 + coachData.length);

    // Verify the table header. The table header has 4 columns.
    let tableHeader = tables[0].children[0];
    let tableHeaderColumns = tableHeader.children;
    expect(tableHeaderColumns.length).toBe(component.displayedColumns.length);
    let idToContextMap = {};
    idToContextMap['coach_id'] = '教练编号';
    idToContextMap['name'] = '姓名';
    idToContextMap['title'] = '职称';
    idToContextMap['status'] = '在岗情况';
    for (var column of component.displayedColumns) {
      let cells = tableHeader.querySelectorAll('.cdk-column-'+column);
      expect(cells.length).toBe(1);
      expect(cells[0].innerHTML.trim()).toEqual(idToContextMap[column]);
    }
    // Verify the coach rows.
    for (var i = 1, j = 0; i < tables[0].children.length ; i++, j++) {
      let coachRow = tables[0].children[i];
      let coachRowColums = coachRow.children;
      expect(coachRowColums.length).toBe(component.displayedColumns.length);
      for (var key in coachData[j]) {
        let value = coachData[j][key].toString();
        if (key == 'title') {
          value = coachTitlePipe.transform(value);
        } else if (key == 'status') {
          value = coachStatusPipe.transform(value);
        }
        let cells = coachRow.querySelectorAll('.cdk-column-'+key);
        expect(cells.length).toBe(1);
        expect(cells[0].innerHTML.trim()).toEqual(value);
      }
    }
  });
});
