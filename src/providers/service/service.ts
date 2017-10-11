import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import {INDEX_SEARCH, IndexState, myAction} from "../reducer/BbsReducer";
import {mySectionAction} from "../reducer/SectionReducer";
import {mySubSectionAction} from "../reducer/SubSectionReducer";
import {bathPath} from "../../app/environment";
import {myTopicAction, TOPIC_ADD_LIST, TOPIC_SEARCH_LIST, TOPIC_SEARCH_ONE} from "../reducer/TopicReducer";
import {Observable} from "rxjs/Observable";

/*
 Generated class for the ServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class ServiceProvider {

    constructor(private http: Http, private store: Store<IndexState[]>) {
        console.log('Hello ServiceProvider Provider');
    }

    getIndexData() {
        this.http.get(bathPath + 'bbsinterf/js/100118.htm')
            .map(res => res.json())
            .subscribe(result => {
                if (result.reset === '1000' && result.status === '0') {
                    let data = result.sections;
                    this.store.dispatch(new myAction(data))
                } else {
                    alert(result.desc);
                }
            })
    }

    getSectionData(param: { sectionid: string }) {//{sectionid}
        this.http.get(bathPath + 'bbsinterf/js/100120.htm', {params: param})
            .map(res => res.json())
            .subscribe(result => {
                if (result.reset === '1000' && result.status === '0') {
                    let data = {subSections: result.subSections, detailInfo: result.detailInfo};
                    this.store.dispatch(new mySectionAction(data))
                } else {
                    alert(result.desc);
                }
            })
    }


    getSubSectionData(param: {
        start: string,
        sectionId: string,
        subSectionId: string,
        lastTime?: string
        lastIds?: string,
    }) {//{sectionid}
        this.http.get(bathPath + 'bbsinterf/js/100112.htm', {params: param})
            .map(res => res.json())
            .subscribe(result => {
                if (result.reset === '1000' && result.status === '0') {
                    this.store.dispatch(new mySubSectionAction(result))
                } else {
                    alert(result.desc);
                }
            })
    }

    getSubSectionOne(param: {
        topicId: string,
    }) {//{sectionid}
        this.http.get(bathPath + 'bbsinterf/js/100137.htm', {params: param})
            .map(res => res.json())
            .subscribe(result => {
                if (result.reset === '1000' && result.status === '0') {
                    this.store.dispatch(new myTopicAction(TOPIC_SEARCH_ONE, {
                        'sectionInfo': result.sectionInfo,
                        'topicInfo': null
                    }))
                } else {
                    alert(result.desc);
                }
            })
    }

    getTopicList(param: {
        topicId: string,
        start: number,
        limit: number,
        lastFloor: string
    }, refresher?: { complete: () => {} }) {//{sectionid}
        this.http.get(bathPath + 'bbsinterf/js/100125.htm', {params: param})
            .map(res => res.json())
            .subscribe(result => {
                if (result.reset === '1000' && result.status === '0') {
                    if (param.start === 0) {
                        this.store.dispatch(new myTopicAction(TOPIC_SEARCH_LIST, {
                            'sectionInfo': null,
                            'topicInfo': result
                        }));

                    } else {
                        this.store.dispatch(new myTopicAction(TOPIC_ADD_LIST, {
                            'sectionInfo': null,
                            'topicInfo': result
                        }));
                    }
                    refresher && refresher.complete();
                } else {
                    alert(result.desc);
                }
            })
    }



    //登录接口
    login(param:{
        username: string,
        password: string,
        vCode: string}
        ):Observable<any>{
        return this.http.post(bathPath + 'bbsinterf/js/100104.htm',null, {params: param})
            .map(res => res.json())

    }




}
