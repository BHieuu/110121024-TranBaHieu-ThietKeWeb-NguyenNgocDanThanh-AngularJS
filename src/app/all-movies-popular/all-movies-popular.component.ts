import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-movies-popular',
  templateUrl: './all-movies-popular.component.html',
  styleUrl: './all-movies-popular.component.scss',
})
export class AllMoviesPopularComponent {
  popularMovies: any;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.getPopularMovies();
  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
