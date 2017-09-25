import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSource, CdkTableModule } from '@angular/cdk/table';

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
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
