import {UserServiceProvider} from "../service/user.service";
import {ModalController, NavController} from 'ionic-angular';
import {LoginPage} from "../../pages/login/login";

export abstract class Loginfilter {
  constructor(protected userService: UserServiceProvider, protected modalCtrl: ModalController,protected navCtrl:NavController) {

  }

  ionViewWillEnter(): void {
    if (!this.userService.isLogin()) {
      let  loginModal =  this.modalCtrl.create(LoginPage);
      loginModal.present();
      loginModal.onDidDismiss(()=>{
        this.navCtrl.parent.select(0);
      })
    }
  }
}
