import { Component } from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {IndexPage} from "../index/index";
import {ServiceProvider} from "../../providers/service/service";
import {UserServiceProvider} from "../../providers/service/user.service";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    vCode:string;
    password:string;
    username:string;

  constructor(public viewCtrl: ViewController,private  service:ServiceProvider,private uService:UserServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goBack(){
      this.viewCtrl.dismiss();
  }

  login(){
    this.service.login({username:this.username,password:this.password,vCode:this.vCode})
        .subscribe(res=>{
            if(res.status==='0'&&res.reset==='1000'){
                this.uService.getUserInfo();
                this.viewCtrl.dismiss();
            }else{
                alert(res.desc);
            }
        })
  }

}
