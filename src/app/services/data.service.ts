import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from'@angular/common/http';
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
    const params = new HttpParams()
      .set('i', id)
      .set('apikey', DataService.key);
   
    return this.http.get<any>(DataService.apiUrl, { 'params': params })
                    .pipe(retry(1), catchError(this.handleError))
                    
 
  }

  getMoviesByTitle(title: any, page:number) {
    const params = new HttpParams()
      .set('s', title)
      .set('page', page)
      .set('apikey', DataService.key)
    return this.http.get<Movie>(DataService.apiUrl, { 'params': params })
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
