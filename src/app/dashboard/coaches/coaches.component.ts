import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

import { Observable } from 'rxjs/Observable';

import { Coach } from '../../model/coach';
import { CoachService } from '../../services/coach.service';

@Component({
  selector: 'coaches',
  styleUrls: [ './coaches.component.css'],
  templateUrl: './coaches.component.html',
})
export class CoachesComponent implements OnInit {
  displayedColumns = ['coach_id', 'name', 'title', 'status'];
  coachDatabase: CoachHttpDatabase | null;
  dataSource: CoachDataSource | null;

  constructor(private _coachService: CoachService) {
      this.coachDatabase = new CoachHttpDatabase(_coachService);
      this.dataSource = new CoachDataSource(this.coachDatabase);
    }

  ngOnInit(): void { }
}

/**
 * The coach database that the data source uses to retrieve data for the table.
 * It is the class that manage the coach data.
 */
export class CoachHttpDatabase {
  constructor(private _coachService: CoachService) { }
  getCoaches(): Observable<Coach[]> {
    return this._coachService.getCoaches();
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, CoachHttpDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class CoachDataSource extends DataSource<Coach> {
  constructor(private _coachHttpDatabase: CoachHttpDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Coach[]> {
    return this._coachHttpDatabase.getCoaches();
  }

  disconnect() {}
}