import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PostPage } from '../post/post';
import {IndexPage} from '../index/index';
import {IonicPage} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2Root = PostPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
