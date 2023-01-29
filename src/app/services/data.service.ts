import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Movie } from '../modules/movie';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

// import { catch } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public static apiUrl = `http://www.omdbapi.com` ;
  public static key = `e4fdc5`;
  

  constructor(private http: HttpClient) { }
  


  getmovieDetails(id: any) {
    return this.http.get<any>(DataService.apiUrl + `/?i=${id}&apikey=` + DataService.key)
                    .pipe(retry(1), catchError(this.handleError))
                    
 
  }

  getMoviesByTitle(title: any, page:number) {
    return this.http.get<Movie>(DataService.apiUrl+`/?s=${title}&page=${page}&apikey=`+DataService.key)
                    .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }


 }


const httpOptions = { 
  headers: new HttpHeaders( { 'Content-Type': 'application/json' })
};


// Go through the '@angular/common/http' docs - params of get calls
// Implement proper error handling mechanism 
// proper function names
