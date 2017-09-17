import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'age', 'projects'];
  studentDatabase: StudentHttpDatabase | null;
  dataSource: StudentDataSource | null;

  constructor(private _studentService: StudentService) {
      this.studentDatabase = new StudentHttpDatabase(_studentService);
      this.dataSource = new StudentDataSource(this.studentDatabase);
    }

  ngOnInit(): void { }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return ;}
    this.heroService.create(name)
        .then(hero => {
          this .heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  */
}

/**
 * The student database that the data source uses to retrieve data for the table.
 * It is the class that manage the student data.
 */
export class StudentHttpDatabase {
  constructor(private _studentService: StudentService) { }
  getStudents(): Observable<Student[]> {
    return this._studentService.getStudents();
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, StudentHttpDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class StudentDataSource extends DataSource<Student> {
  constructor(private _studentHttpDatabase: StudentHttpDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Student[]> {
    return this._studentHttpDatabase.getStudents();
  }

  disconnect() {}
}
