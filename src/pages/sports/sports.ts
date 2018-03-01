import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {
  dataStream :any;
  url: string ;
  array : any[] ;

  constructor( public view :ViewController, private dataService:DataServicesProvider, public nav: NavController) {
    this.url ='https://newsapi.org/v2/everything?q=football&from=&sortBy=popularity&apiKey=9afedab84a284862958ec537c1220905' ;
    this.getDataStream();


  }


  getDataStream () {  // get data from get request /// get data from a specific url

    this.dataStream = this.dataService.getData(this.url).subscribe(value => {
      this.dataStream = value ;
      this.array = Array.of(this.dataStream) ;
    });
  }

}
