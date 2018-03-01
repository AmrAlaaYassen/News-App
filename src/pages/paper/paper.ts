import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DataServicesProvider} from "../../providers/data-services/data-services";
import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";

/**
 * Generated class for the PaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paper',
  templateUrl: 'paper.html',
})
export class PaperPage {

  dataStream :any;
  url: string ;
  array : any[] ;
  titleStyles = {
    'visibility': 'hidden'
  }
  constructor( public view :ViewController, private dataService:DataServicesProvider, public nav: NavController) {
    this.url ='' ;
    this.getDataStream();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaperPage');
  }


  setUrl (newUrl :string) {
    this.url =  'https://newsapi.org/v2/top-headlines?sources='+newUrl+'&apiKey=9afedab84a284862958ec537c1220905'
    this.getDataStream() ;
    this.titleStyles = {
      'visibility': 'visible'
    }
  }

  getDataStream () {  // get data from get request /// get data from a specific url

    this.dataStream = this.dataService.getData(this.url).subscribe(value => {
      this.dataStream = value ;
      this.array = Array.of(this.dataStream) ;
    });
  }

}
