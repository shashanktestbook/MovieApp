import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'loader',
    templateUrl: './loader.html',
    styleUrls: ['./loader.css']
  })

export class Loader implements OnInit {

    constructor() { }

    @Input() loader = true;
  
    ngOnInit(): void {
        // setTimeout(() => {
        //     this.loader = false;
        //   }, 3000);
    }
  
  }