import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {Store} from "@ngrx/store";
import {IndexState} from "../../providers/reducer/BbsReducer";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
interface AppState {
  index: IndexState[];
}

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  games:Observable<IndexState[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,private store:Store<AppState>,private service:ServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.getIndexData();
    this.getIndexData();
    console.log('ionViewDidLoad IndexPage');
  }

  getIndexData(){
    this.games = this.store.select('index');
  }

}
