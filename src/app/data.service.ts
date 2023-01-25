import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public static api_url = `http://www.omdbapi.com` ;
  public static key = `e4fdc5`;
  

  constructor(private http: HttpClient) { }
  
  getMovieByTitle(title: any) {
    // let url = `http://www.omdbapi.com/?s=${title}&apikey=e4fdc5`;

    return fetch(DataService.api_url+`/?s=${title}&apikey=` + DataService.key)
    .then(res => res.json())
    .catch(err =>  console.log("Error! :D", err))
  }

  loadmovieDetails(id: any) {
    return this.http.get<any>(DataService.api_url + `/?i=${id}&apikey=` + DataService.key)
 
  }

  getMoviesByPage(title: any, page:number){
    return this.http.get<any>(DataService.api_url+`/?s=${title}&page=${page}&apikey=`+DataService.key)
  }
}

// Create a global static url inside the class and use it throughout 
// Go through the '@angular/common/http' docs
// Implement proper error handling mechanism 
// API key should static just like url and declared at the top level in the class
