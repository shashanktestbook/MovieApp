import { Component, OnInit, Output, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { EventEmitter } from '@angular/core';
import { query } from '@angular/animations';
// consistency in variable names

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTitle: string[] = [];
  // curr_page: number;
  movieList=[];
  reactiveForm!: FormGroup;
  errorMessage: string = '';
  pagination: boolean = false;
  response: string = "false";

  public current: number = 1;
  public total: number = 10;
  public form: { filter: string };

  public onGoto(page: number): void {
    this.current = page;
    this.paginate(this.searchTitle)
  }

  public onNext(page: number): void {
    this.current = this.current+1;
    this.paginate(this.searchTitle);
  }
  
  public onPrevious(page: number): void{
    this.current = this.current-1;
    this.paginate(this.searchTitle);
  }


  constructor(private dataService: DataService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
    this.activatedRoute = activatedRoute;
    this.form = {
      filter: (activatedRoute.snapshot.params.filter || "")
    }

   }

   createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [//Validators.required,
                  // Validators.minLength(3),
                  Validators.maxLength(20)]]
    })
   }

  //  public applySearch() : void {
  //   this.applyFilterToRoute();
  //  }

  //  private applyFilterToRoute() : void {
  //   this.router.navigate(
  //     [
  //       {
  //         name: this.searchTitle
  //       }
  //     ],
  //     {
  //       relativeTo: this.activatedRoute,
  //       replaceUrl: true
  //     }
  //   );

  //   document.title = `Search: ${this.searchTitle}`;
  //  }

  searchmovie(title: any) {
    

    // this.router.navigate(
    //   [''],
    //   {queryParams: {title: title}}
    // )

    
      


    this.dataService
      .getMoviesByTitle(title, 1).subscribe((result: any) => {
        this.movieList = result.Search;
        this.total = result.totalResults;
        this.response = result.Response;
        this.pagination = true;
      })

      
      // .then((result: { Search: never[]; })=> (this.movieList = result.Search))

  }

  paginate(title: any){
    this.dataService
      .getMoviesByTitle(title, this.current).subscribe((response: any) => {
        this.movieList = response.Search;
        console.log(response);
        this.total = response.totalResults;
      });
  }

  pageChangeEvent(event: number){
    this.current = event;

    this.paginate(this.searchTitle);
  }


// capture search and rediect - write function in init
// generalize getMovies function

  


  ngOnInit(): void {

  }


}


