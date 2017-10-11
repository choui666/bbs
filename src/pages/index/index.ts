import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {Store} from "@ngrx/store";
import {IndexState} from "../../providers/reducer/BbsReducer";
import {Observable} from "rxjs/Observable";
import {AppState} from "../../providers/reducer/index";
import {SectionPage} from "../section/section";

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  games:Observable<IndexState[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private store:Store<AppState>,private service:ServiceProvider) {

  }

  ionViewDidLoad() {
    this.service.getIndexData();//查询首页数据
    this.getIndexData();//订阅查询数据
  }

  getIndexData(){
    this.games = this.store.select('index');
  }

  gotoSection(game:IndexState){
    this.navCtrl.push(SectionPage,{game})
  }

}
