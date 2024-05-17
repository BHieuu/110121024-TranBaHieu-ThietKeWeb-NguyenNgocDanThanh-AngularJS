import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {}

  goTohome() {
    this.router.navigate(['home']);
  }
  logout() {
    this.router.navigate(['login']);
    alert('Đăng xuất thành công!');
  }
  panel() {
    this.router.navigate(['admin']);
  }
}
