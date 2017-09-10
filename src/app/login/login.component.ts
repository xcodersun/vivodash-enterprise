import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { AuthToken } from '../model/auth-token';
import { JSEncrypt } from 'jsencrypt';

const publickey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEeDtw3cSSlcXhjfkmcwDocYuD
DDNJ2oF+Uk8bk5MVCgxuHm+MfmEiZuT+Ii+o0f+JDsdyGbZiNPAnknxkbMwgbPiQ
NssSBetmdgQb62KMMMgee5f7E7wYPksuDI7RU1PyX07k6eay9jxpuAWbfvWKM7B9
e4vKYJ/EFOHpJ+xDTwIDAQAB
-----END PUBLIC KEY-----`;

@Component ({
  selector: 'app-ve-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  @Input() user: User = { username: '', password: '' };
  encrypt = new JSEncrypt();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {}

  login(): void {
    this.encrypt.setPublicKey(publickey);
    this.authenticationService
        .login(this.encrypt.encrypt(JSON.stringify(this.user)))
        .subscribe(
          authtoken => {
            localStorage.setItem('authtoken', authtoken.token);
            this.router.navigate(['/dashboard']);
          }
        );
  }
}
