import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  constructor(
    private router: Router,
    private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      students => {
        console.log(students);
      }
    );
  }

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
