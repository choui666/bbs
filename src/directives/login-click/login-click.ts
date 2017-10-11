import {Directive, HostListener, Input} from '@angular/core';
import {UserServiceProvider} from "../../providers/service/user.service";
import {ModalController, NavController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";

/**
 * Generated class for the LoginClickDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[login-click]' // Attribute selector
})
export class LoginClickDirective {

  @Input('login-click')
  callBack:()=>{};

  constructor(private userService: UserServiceProvider ,private modalCtrl: ModalController,private navCtrl:NavController) {
    console.log('Hello LoginClickDirective Directive');
  }

   @HostListener('click', ['$event.target'])
  myClick(){
      if (!this.userService.isLogin()) {
          let  loginModal =  this.modalCtrl.create(LoginPage);
          loginModal.present();
      } else{
          this.callBack();
      }
  }
}
