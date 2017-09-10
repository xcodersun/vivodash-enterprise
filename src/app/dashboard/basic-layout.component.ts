import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

export class Tab {
  label: string;
  link: string;
}

const TABS: Tab[] = [
  { label: '学生管理', link: '/dashboard/students' },
  { label: '教练管理', link: '/dashboard/coaches' },
];

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit {
  tabs = TABS;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
}
