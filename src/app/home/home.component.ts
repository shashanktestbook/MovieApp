import { Component, OnInit, Output, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public s_title: string[] = [];
  // curr_page: number;
  movieList=[];
  reactiveForm!: FormGroup;
  pagination: boolean = false;

  public current: number = 1;
  public total: number = 10;

  public onGoto(page: number): void {
    this.current = page;
    this.paginate(this.s_title)
  }

  public onNext(page: number): void {
    this.current = this.current+1;
    this.paginate(this.s_title);
  }
  
  public onPrevious(page: number): void{
    this.current = this.current-1;
    this.paginate(this.s_title);
  }


  constructor(private dataService: DataService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
   }

   createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [//Validators.required,
                  // Validators.minLength(3),
                  Validators.maxLength(20)]]
    })
   }


  searchmovie(title: any) {
    this.pagination = true;

    // this.router.navigate(
    //   [''],
    //   {queryParams: {title: title}}
    // )

    this.dataService
      .getMovieByTitle(title)
      .then((result)=> (this.movieList = result.Search))

  }

  paginate(title: any){
    this.dataService
      .getMoviesByPage(title, this.current).subscribe((response: any) => {
        this.movieList = response.Search;
        console.log(response);
        this.total = response.totalResults;
      });
  }

  pageChangeEvent(event: number){
    this.current = event;

    this.paginate(this.s_title);
  }




  


  ngOnInit(): void {
    // this.reactiveForm = new FormGroup({
    //   search : new FormControl(this.s_title.search , [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(250)
    //   ])
    // })
    // this.s_title = +this.activatedRoute.snapshot.queryParamMap.get('s_title')||null;


  }


}


