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
  MdTabsModule,
  MdToolbarModule,
} from '@angular/material';

import { AppRoutingModule } from './routes/app-routing.module';
import { AuthGuard } from './routes/auth.guard';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';

import { AuthenticationService } from './services/authentication.service';
import { StudentService } from './services/student.service';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
import { BasicLayoutComponent } from './dashboard/basic-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // some Material components dependency
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdTabsModule,
    MdToolbarModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CoachesComponent,
    LoginComponent,
    StudentsComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    BasicLayoutComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    StudentService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
