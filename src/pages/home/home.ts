import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {DataServicesProvider} from '../../providers/data-services/data-services' ;
import { MenuController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataStream :any;
  url: string ;
  array : any[] ;

  constructor( public view :ViewController, private dataService:DataServicesProvider, public nav: NavController , public menuCtrl: MenuController) {
    this.url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=9afedab84a284862958ec537c1220905' ;
    this.getDataStream();


  }

  getDataStream () {  // get data from get request /// get data from a specific url

    this.dataStream = this.dataService.getData(this.url).subscribe(value => {
      this.dataStream = value ;
      this.array = Array.of(this.dataStream) ;
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.url = 'https://newsapi.org/v2/top-headlines?q='+val+ '&apiKey=9afedab84a284862958ec537c1220905' ;
      this.getDataStream() ;
        console.log(val) ;
    }
  }

}


 //'https://newsapi.org/v2/top-headlines?country=us&apiKey=9afedab84a284862958ec537c1220905'
//https://api.weatherbit.io/v2.0/current?city=cairo&key=8f485eecf143408a8fea27fd84fa83a0
