import { Component } from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {IndexPage} from "../index/index";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goBack(){
      this.viewCtrl.dismiss();
  }

}
