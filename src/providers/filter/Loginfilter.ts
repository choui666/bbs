import {UserServiceProvider} from "../service/user.service";
import { ModalController } from 'ionic-angular';
import {LoginPage} from "../../pages/login/login";

export abstract  class Loginfilter{
  constructor(protected userService:UserServiceProvider,protected modalCtrl:ModalController){

  }

  ionViewCanEnter():boolean{
    if(this.userService.isLogin()){

    } else{
       this.modalCtrl.create(LoginPage).present();
    }

    return true;
  }
}
