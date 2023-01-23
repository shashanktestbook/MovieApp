import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  findMovieByTitle(title: any) {
    let url = `http://www.omdbapi.com/?s=${title}&apikey=e4fdc5`;
    return fetch(url)
    .then(res => res.json())
    .catch(err =>  console.log("Error! :D", err))
  }

  loadmovie(id: any) {
    return this.http.get<any>(`http://www.omdbapi.com/?i=${id}&apikey=e4fdc5`)
 
  }

  getMovies(title: any, page:number){
    return this.http.get<any>(`http://www.omdbapi.com/?s=${title}&page=${page}&apikey=e4fdc5`)
  }
}

// Create a global static url inside the class and use it throughout 
// Go through the '@angular/common/http' docs
// Implement proper error handling mechanism 
// API key should static just like url and declared at the top level in the class

// 