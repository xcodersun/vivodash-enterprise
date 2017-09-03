import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { MdTabsModule } from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches.component';
import { HeroDetailComponent } from './hero-detail.component';
import { StudentsComponent } from './students.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // some Material components dependency
    MdTabsModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CoachesComponent,
    HeroDetailComponent,
    StudentsComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
