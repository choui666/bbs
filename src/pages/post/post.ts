import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/service/user.service";
import {Loginfilter} from "../../providers/filter/Loginfilter";

@Component({
  selector: 'page-home',
  templateUrl: 'post.html'
})
export class PostPage extends Loginfilter{
  constructor(public navCtrl: NavController,protected userService:UserServiceProvider,
              protected modalCtrl:ModalController) {
    super(userService,modalCtrl,navCtrl);
  }



}
