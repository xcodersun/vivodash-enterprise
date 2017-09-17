import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule} from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdOptionModule,
  MdTabsModule,
  MdTableModule,
  MdToolbarModule,
  MdSelectModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './routes/app-routing.module';
import { AuthGuard } from './routes/auth.guard';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './dashboard/basic-layout.component';
import { CoachesComponent } from './dashboard/coaches/coaches.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './dashboard/students/students.component';

import { AuthenticationService } from './services/authentication.service';
import { CoachService } from './services/coach.service';
import { StudentService } from './services/student.service';

import { CoachTitlePipe } from './utils/coach-title.pipe';
import { CoachStatusPipe } from './utils/coach-status.pipe';

// TODO(alex): Need to remove following imports.
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // some Material components dependency
    CdkTableModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdOptionModule,
    MdTabsModule,
    MdTableModule,
    MdToolbarModule,
    MdSelectModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    CoachesComponent,
    LoginComponent,
    StudentsComponent,
    CoachTitlePipe,
    CoachStatusPipe,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    StudentService,
    CoachService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
