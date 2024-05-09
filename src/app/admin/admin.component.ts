import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
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
}
