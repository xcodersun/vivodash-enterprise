import { TestBed, inject } from '@angular/core/testing';

import { HttpWrapperService } from './http-wrapper.service';
import { MockHttpWrapperService } from './mock-http-wrapper.service';
import { MOCKCOACHDATA } from '../test-data/mock-coach-data';
import { CoachService } from './coach.service';

describe('CoachService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpWrapperService, useClass: MockHttpWrapperService },
        CoachService
      ]
    });
  });

  it('should be created', inject([CoachService], (_coachService: CoachService) => {
    _coachService.getCoaches()
    .subscribe(res => {
      var expectedCoachData = MOCKCOACHDATA.json()
      expect(res.length).toBe(expectedCoachData.length);
      for (var _i = 0; _i < res.length; _i++) {
        expect(res[_i].coach_id).toEqual(expectedCoachData[_i].coach_id);
        expect(res[_i].name).toEqual(expectedCoachData[_i].name);
        expect(res[_i].title).toEqual(expectedCoachData[_i].title);
        expect(res[_i].status).toEqual(expectedCoachData[_i].status);
      }
    });
  }));
});
