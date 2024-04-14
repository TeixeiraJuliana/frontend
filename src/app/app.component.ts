import { AppService } from './app.service';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private appService: AppService
  ){

  }

  ngOnInit(){
    //this.appService.registerClockList().subscribe(data => console.log(data))
  }
}
