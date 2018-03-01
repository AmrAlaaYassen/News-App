import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServicesProvider } from '../providers/data-services/data-services';
import {EntertainmentPage} from '../pages/entertainment/entertainment'
import {SportsPage} from '../pages/sports/sports'
import {TechnologyPage} from '../pages/technology/technology'
import {PaperPage} from "../pages/paper/paper";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,EntertainmentPage,
    SportsPage
    ,TechnologyPage,PaperPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp,{

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EntertainmentPage,
    TechnologyPage,
    SportsPage,
    PaperPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServicesProvider
  ]
})
export class AppModule {}
