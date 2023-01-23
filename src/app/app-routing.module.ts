import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'detail/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
  },
  {
    path: 'bookmark/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movie',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
