import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}

interface Movie {
  id: number;
  title: string;
  imdbRating: number;

}
