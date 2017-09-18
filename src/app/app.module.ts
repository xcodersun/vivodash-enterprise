import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule} from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './routes/app-routing.module';
import { AuthGuard } from './routes/auth.guard';

import { CustomPipesModule } from './custom-pipes/custom-pipes.module';

import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './dashboard/basic-layout.component';
import { CoachesComponent } from './dashboard/coaches/coaches.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './dashboard/students/students.component';

import { AuthenticationService } from './services/authentication.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { CoachService } from './services/coach.service';
import { StudentService } from './services/student.service';

// TODO(alex): Need to remove following imports.
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // some Material components dependency
    CdkTableModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CustomPipesModule,
  ],
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    CoachesComponent,
    LoginComponent,
    StudentsComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    HttpWrapperService,
    StudentService,
    CoachService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
