import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.scss',
})
export class NavAdminComponent {
  constructor(private router: Router) {}
  manageMovies() {
    this.router.navigate(['manage-movies']);
  }
  manageUsers() {
    this.router.navigate(['manage-users']);
  }
  logOut() {
    this.router.navigate(['login']);
  }
  AdminPanel() {
    this.router.navigate(['admin']);
  }
}
