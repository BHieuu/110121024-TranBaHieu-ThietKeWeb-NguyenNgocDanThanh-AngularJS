import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Tài khoản không được trống';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Mật khẩu không được trống';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 101) {
        this.router.navigate(['admin']);
      }
      if (res === 403) {
        this.errorMsg = 'Không xác minh được tài khoản hoặc mật khẩu';
      }
    }
  }
}
