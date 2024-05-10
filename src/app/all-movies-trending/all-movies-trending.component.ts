import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-movies-trending',
  templateUrl: './all-movies-trending.component.html',
  styleUrl: './all-movies-trending.component.scss',
})
export class AllMoviesTrendingComponent {
  trendingMovies: any;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
