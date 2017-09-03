import { Component } from '@angular/core';

export class Tab {
  label: string;
  link: string;
}

const TABS: Tab[] = [
  { label: '学生管理', link: '/dashboard' },
  { label: '教练管理', link: '/heroes' },
];

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: "app.component.html", 
})

export class AppComponent {
  title = 'Tour of Heroes';
  tabs = TABS;
}