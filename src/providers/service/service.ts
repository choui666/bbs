import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import {INDEX_SEARCH, IndexState,myAction} from "../reducer/BbsReducer";
import {mySectionAction} from "../reducer/SectionReducer";
import {mySubSectionAction} from "../reducer/SubSectionReducer";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(private http: Http,private store:Store<IndexState[]>) {
    console.log('Hello ServiceProvider Provider');
  }

  getIndexData(){
     this.http.get('http://bbsinterf.gamebean.net/bbsinterf/js/100118.htm')
       .map(res=>res.json())
       .subscribe(result=>{
         if(result.reset === '1000' && result.status === '0'){
             let data = result.sections;
             this.store.dispatch(new myAction(data))
         }else{
            alert(result.desc);
         }
       })
  }

  getSectionData(param:{sectionid:string}){//{sectionid}
    this.http.get('http://bbsinterf.gamebean.net/bbsinterf/js/100120.htm',{params:param})
      .map(res=>res.json())
      .subscribe(result=>{
        if(result.reset === '1000' && result.status === '0'){
          let data ={subSections: result.subSections,detailInfo:result.detailInfo};
          this.store.dispatch(new mySectionAction(data))
        }else{
          alert(result.desc);
        }
      })
  }


  getSubSectionData(param:{
    start:string,
    sectionId:string,
    subSectionId:string,
    lastTime?:string
      lastIds?:string,
    }){//{sectionid}
    this.http.get('http://bbsinterf.gamebean.net/bbsinterf/js/100112.htm',{params:param})
      .map(res=>res.json())
      .subscribe(result=>{
        if(result.reset === '1000' && result.status === '0'){
          this.store.dispatch(new mySubSectionAction(result))
        }else{
          alert(result.desc);
        }
      })
  }
}
