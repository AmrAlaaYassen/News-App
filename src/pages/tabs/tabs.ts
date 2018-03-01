import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EntertainmentPage } from '../entertainment/entertainment';
import { TechnologyPage } from '../technology/technology';
import { SportsPage } from '../sports/sports';
import {PaperPage} from "../paper/paper";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = EntertainmentPage;
  tab4Root = TechnologyPage ;
  tab5Root = SportsPage ;
  tab6Root = PaperPage ;
  constructor() {

  }
}
