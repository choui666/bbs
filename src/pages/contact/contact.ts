import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Loginfilter} from "../../providers/filter/Loginfilter";
import {UserServiceProvider} from "../../providers/service/user.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {

  constructor(public navCtrl: NavController,protected userService:UserServiceProvider,protected modalCtrl:ModalController) {
   // super(userService,modalCtrl);
  }

}
