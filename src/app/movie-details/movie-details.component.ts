import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Loader } from '../common/loader/loader';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  public loader: boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  showmovieDetails(){
    this.dataService.getmovieDetails(this.route.snapshot.paramMap.get('id')).subscribe(movie =>{
      this.movie = movie;
    })
      
  }
  

  ngOnInit(): void {
    this.showmovieDetails();

  }

  

  // @Input() movieData: any;

}

// set loader in pipe based on observable
// loader in common component
