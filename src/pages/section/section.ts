import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexState} from "../../providers/reducer/BbsReducer";
import {ServiceProvider} from "../../providers/service/service";
import {SectionState} from "../../providers/reducer/SectionReducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../providers/reducer/index";

/**
 * Generated class for the SectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-section',
  templateUrl: 'section.html',
})
export class SectionPage {

  game:IndexState = {
    icon:'',
    title:'',
    id:''
  };

  icons:string = 'camera';

  data:SectionState = {
    subSections:[],
    detailInfo:{}
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:ServiceProvider,private store:Store<AppState>) {

  }

  ionViewDidLoad() {
    this.game = this.navParams.get('game');
    this.service.getSectionData({sectionid:this.game.id});
    this.store.select('section').subscribe(res=>{
      if(res){
        this.data = res;
        this.icons = this.data.subSections[0].id
      }
    })
  }

}
