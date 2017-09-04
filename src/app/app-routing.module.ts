import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent }   from './coaches.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent }      from './students.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: CoachesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'students',     component: StudentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}