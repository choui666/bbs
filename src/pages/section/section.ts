import {Component, OnDestroy} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {IndexState} from "../../providers/reducer/BbsReducer";
import {ServiceProvider} from "../../providers/service/service";
import {SectionState} from "../../providers/reducer/SectionReducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../providers/reducer/index";
import {Subscription} from "rxjs/Subscription";
import {SubSectionState} from "../../providers/reducer/SubSectionReducer";

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
export class SectionPage implements OnDestroy {

  game: IndexState = {
    icon: '',
    title: '',
    id: ''
  };


  _icons: string = 'camera'

  sectionData: SectionState = {
    subSections: [],
    detailInfo: {}
  };

  subsectionData: SubSectionState = {
    bbsrandom: "",
    desc: "",
    isLastPage: "",
    lastIds: "",
    lastTime: "",
    reset: "",
    status: "",
    topics: []
  };

  $subsection: Subscription;
  $section: Subscription;

  get icons() {
    return this._icons;
  }

  set icons(value: string) {
    this._icons = value;
    this.service.getSubSectionData({
      start: '0',
      sectionId: this.game.id,
      subSectionId: value
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,
              private service: ServiceProvider, private store: Store<AppState>) {

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
    this.game = this.navParams.get('game');
    this.service.getSectionData({sectionid: this.game.id});
    this.$section = this.store.select('section').subscribe(res => {
      if (res) {
        this.sectionData = res;
        this.icons = this.sectionData.subSections[0].id
      }
    })
    this.$subsection = this.store.select('subsection').subscribe(res2 => {
      if(res2){
        this.subsectionData = res2;
      }

    })

    this.$section.add(this.$subsection);
  }

  select(ev: any) {
    this.icons = ev.value;
  }

  ngOnDestroy() {
    this.$section.unsubscribe();
  }
}
