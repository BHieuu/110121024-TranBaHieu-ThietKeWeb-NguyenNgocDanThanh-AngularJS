import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrl: './manage-movies.component.scss',
})
export class ManageMoviesComponent {
  constructor(private router: Router) {}
}
