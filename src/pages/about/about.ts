import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dataStream :any;
  url: string ;
  array : any[] ;

  constructor( public view :ViewController, private dataService:DataServicesProvider, public nav: NavController) {
    this.url ='https://api.weatherbit.io/v2.0/current?city=cairo&key=8f485eecf143408a8fea27fd84fa83a0' ;
    this.getDataStream();


  }

  getDataStream () {  // get data from get request /// get data from a specific url

    this.dataStream = this.dataService.getData(this.url).subscribe(value => {
      this.dataStream = value ;
      this.array = Array.of(this.dataStream) ;
    });
  }

}


 //'https://newsapi.org/v2/top-headlines?country=us&apiKey=9afedab84a284862958ec537c1220905'
//https://api.weatherbit.io/v2.0/current?city=cairo&key=8f485eecf143408a8fea27fd84fa83a0
