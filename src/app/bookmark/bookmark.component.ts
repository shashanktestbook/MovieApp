import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Movie } from '../modules/movie';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  bookmarks : Movie[]= [];

  constructor(private dataservice: DataService) { }

  getBookmarks() { 
    const data = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if(data !== null) {
      this.bookmarks = data;
      console.log("Bookmarked!");

    }

  }
  removebookmarks(title: any){
    for(let i=0;i<this.bookmarks.length;i++){
      if(this.bookmarks[i] === title){
        this.bookmarks.splice(i,1);
        localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
        return;
      }
    }
  }


  ngOnInit(): void {
    this.getBookmarks();
  }

}
