import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {Store} from "@ngrx/store";
import {AppState} from "../../providers/reducer/index";
import {SectionInfo, TopicInfo, TopicState} from "../../providers/reducer/TopicReducer";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/operator/take";

/**
 * Generated class for the TopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-topic',
    templateUrl: 'topic.html',
})
export class TopicPage {
    topicId: string;
    sectionInfo: SectionInfo;
    topicInfo: TopicInfo;
    topicSubscription: Subscription;
    infiniteEnable: boolean = true;


    constructor(public navCtrl: NavController, public navParams: NavParams,
                private service: ServiceProvider, private store: Store<AppState>) {
    }

    ionViewDidLoad() {
        this.topicId = this.navParams.get('topicId');
        this.service.getSubSectionOne({'topicId': this.topicId});
        this.doRefresh();
        this.topicSubscription = this.store.select('topic').subscribe((res: TopicState) => {
            this.sectionInfo = res && res.sectionInfo;
            this.topicInfo = res && res.topicInfo;
            if (this.topicInfo && this.topicInfo.isLastPage) {
                this.infiniteEnable = this.topicInfo.isLastPage === '1' ? false : true;
            }
        })
    }


    doRefresh(refresher?: { complete: () => {} }) {
        this.service.getTopicList({
            'topicId': this.topicId,
            start: 0,
            limit: 5,
            lastFloor: undefined
        }, refresher)
    }


    doInfinite(infiniteScroll: { enable: (able: boolean) => {}, complete: () => {} }) {
        if (this.topicInfo.isLastPage === '1') {
            this.infiniteEnable = false;
        } else {
            this.service.getTopicList({
                'topicId': this.topicId,
                start: this.topicInfo.mainReplyInfos.length,
                limit: 5,
                lastFloor: this.topicInfo.lastFloor
            }, infiniteScroll)
        }
    }

    like(){
        console.log('like this topic!!');
    }


    viewWillUnload() {
        this.topicSubscription.unsubscribe();
    }


}
