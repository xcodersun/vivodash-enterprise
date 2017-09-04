import { Component, Input } from '@angular/core';

import { User } from '../model/user';

@Component ({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  @Input() user: User = { username: "", password: "" };

  login(): void {
    console.log(this.user);
  }
}