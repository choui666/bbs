import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {bathPath} from "../../app/environment";
import {Store} from "@ngrx/store";
import {AppState} from "../../providers/reducer/index";

/**
 * Generated class for the ImgCaptchaDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[img-captcha]' // Attribute selector
})
export class ImgCaptchaDirective implements  OnInit{

 interFace = "/js/100102.htm?width=120&height=38";

 bbstokenId:string;



  constructor(private el: ElementRef,private store:Store<AppState>){

  }

  ngOnInit(){
     this.store.select('userInfo').subscribe(user=>{
        this.bbstokenId = user&&user.bbsrandom;
     })
     this.el.nativeElement.setAttribute('src',this.url)
  }

  @HostListener('click', ['$event.target'])
  onClick() {
     this.el.nativeElement.setAttribute('src',this.url)
  }

  get url():string{
    return [bathPath,this.interFace,'&_=',new Date().getTime(),'&bbstokenid=',this.bbstokenId].join('');
  }

}
