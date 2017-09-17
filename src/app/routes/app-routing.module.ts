import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { BasicLayoutComponent } from '../dashboard/basic-layout.component';
import { CoachesComponent } from '../dashboard/coaches/coaches.component';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent } from '../dashboard/students/students.component';

// TODO(alex): need to remove following import.
import { HeroDetailComponent } from '../hero-detail.component';

const routes: Routes = [
  { path: '', component: BasicLayoutComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard',  component: BasicLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
      { path: 'coaches', component: CoachesComponent, canActivate: [AuthGuard] },
    ] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
