import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { CoachesComponent }   from '../coaches.component';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent }      from '../students.component';
import { HeroDetailComponent }  from '../hero-detail.component';

const routes: Routes = [
  { path: '', component: CoachesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard',  component: CoachesComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
