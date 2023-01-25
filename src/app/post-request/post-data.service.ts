import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpclient: HttpClient) { }

  postMovie() {

  }

  addMovieToDatabase(title: Title) {
    
  }
}
