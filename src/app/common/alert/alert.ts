import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
    selector: 'alert-component',
    templateUrl: './alert.html',
    styleUrls: ['./alert.css']
  })

export class Alert implements OnInit {
    route: any;

    constructor() { }

    myalert() {
        alert('Invalid Input...');
        window.location.href = "/";
    }
  
    ngOnInit(): void {
        this.myalert();
    }
  
  }