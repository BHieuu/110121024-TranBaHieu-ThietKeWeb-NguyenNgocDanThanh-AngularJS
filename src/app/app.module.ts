import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from './feature/feature.module';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { AllMoviesTrendingComponent } from './all-movies-trending/all-movies-trending.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    HeaderComponent,
    AdminComponent,
    LoginComponent,
    ManageMoviesComponent,
    ManageUsersComponent,
    NavAdminComponent,
    AllMoviesTrendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
