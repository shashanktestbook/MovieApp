// import { identifierName } from '@angular/compiler';
import { state } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'process';
// import { Title } from '@angular/platform-browser';
// import { last } from 'rxjs';
import { DataService } from '../services/data.service';
import { Movie } from '../modules/movie';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  movies: string[] = [];
  bookmarks: Movie[] = [];
  public searchTitle: any;
  blank: boolean=true;



  public current: number = 1;
  public total: number = 10;
  errorMessage: any;

  // public onGoto(page: number): void {
  //   this.current = page;
  //   // this.paginate(this.movies)
  // }

  // public onNext(page: number): void {
  //   this.current = page+1;
  //   // this.paginate(this.movies);
  // }
  
  // public onPrevious(page: number) : void {
  //   this.current = page-1;
  //   // this.paginate(this.movies);
  // }

 
  constructor(private dataService : DataService, private router: Router, private acttivatedRoute: ActivatedRoute) { }


  getMovies(movie: any) {
    const getbookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    movie.active = !movie.active;
      let foundAtPos = -1;

      if(getbookmarks == null){
        this.bookmarks = [];
      } else {
        this.bookmarks = getbookmarks;
      }

      if(movie !== null){
        console.log(this.bookmarks.length);

        for(let i = 0; i < this.bookmarks.length; i++){
          if(this.bookmarks[i].imdbID ==  movie.imdbID){
            foundAtPos = 1;
          }
        }
        if(foundAtPos > -1){
          console.log('No updates!');
        } else {
          // const bookmarks = state.bookmarks;
          this.bookmarks.push(movie);
          localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
        }
      }
  }

  // paginate(title: any){
  //   this.dataService
  //     .getMovies(title, this.current).subscribe((response: any) => {
  //       this.movieData = response.Search;
  //       console.log(response);
  //       this.total = response.total;
  //     });
  // }

  // pageChangeEvent(event: number){
  //   this.p = event;

  //   this.paginate(this.s_title); //access title
  // }


  @Input() movieData: any; 
  @Input() response: string = "false";
  // @Input() s_title: string | ;

  paginate(title: string){
    this.dataService
      .getMoviesByTitle(title, this.current).subscribe((result: any) => {
        this.movieData = result.Search;
        // this.s_title = response.Search[0].Title;
        console.log(result);
        this.total = result.totalResults;
        this.response = result.Response
      });
  }

  pageChangeEvent(event: number){
    this.current = event;

    this.paginate(this.searchTitle); //access title
  }
  


  ngOnInit(): void {
    this.getMovies(null);
  }

}
