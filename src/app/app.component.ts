import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';

export class Tab {
  label: string;
  link: string;
}

const TABS: Tab[] = [
  { label: '学生管理', link: '/students' },
  { label: '教练管理', link: '/dashboard' },
];

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: "app.component.html", 
})

export class AppComponent {
  title = 'Tour of Heroes';
  tabs = TABS;
  
  constructor(private authenticationService: AuthenticationService) {}
  isLoggedIn() {
    return this.authenticationService.login();
  }
}
