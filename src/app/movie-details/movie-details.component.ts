import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  loader: boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  showmovieDetails(){
    this.dataService.loadmovieDetails(this.route.snapshot.paramMap.get('id')).subscribe(movie =>{
      this.movie = movie;
    })
      
  }
  

  ngOnInit(): void {
    this.showmovieDetails();

    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }

  

  // @Input() movieData: any;

}
