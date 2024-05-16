import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-movies-theatre',
  templateUrl: './all-movies-theatre.component.html',
  styleUrl: './all-movies-theatre.component.scss',
})
export class AllMoviesTheatreComponent {
  theatreMovies: any;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.getTheatreMovies();
  }
  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
