import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { AllMoviesTrendingComponent } from './all-movies-trending/all-movies-trending.component';
import { AllMoviesTheatreComponent } from './all-movies-theatre/all-movies-theatre.component';
import { AllMoviesPopularComponent } from './all-movies-popular/all-movies-popular.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:type/:id', component: MovieComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-movies', component: ManageMoviesComponent },
  { path: 'all-movies-trending', component: AllMoviesTrendingComponent },
  { path: 'all-movies-theatre', component: AllMoviesTheatreComponent },
  { path: 'all-movies-popular', component: AllMoviesPopularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
