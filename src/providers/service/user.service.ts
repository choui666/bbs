import {Injectable, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
// import {Storage} from '@ionic/storage';
import {myUserInfoAction, UserInfoState} from "../reducer/UserInfoReducer";
import {Subscription} from "rxjs/Subscription";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export interface UserState {
  userInfo: UserInfoState;
}

@Injectable()
export class UserServiceProvider implements OnDestroy {

  private _isLogin: boolean = false;
  private logedSubscription: Subscription;

  constructor(private http: Http, private store: Store<UserState>) {//, private storage: Storage
    console.log('Hello UserServiceProvider Provider');
  }

  getUserInfo() {
    this.http.get('http://bbsinterf.gamebean.net/bbsinterf/js/100114.htm').map(res => res.json()).subscribe(result => {
      const data: UserInfoState = {
        bbsrandom: result.bbsrandom,
        reset: result.reset,
        userinfo: result.userinfo
      }
      this.store.dispatch(new myUserInfoAction(data))
    });
    this.logedSubscription = this.store.select('userInfo').subscribe(result => {
      if (result && result.reset) {
        this._isLogin = result.reset !== 'b499';
      }
    })
  }

  isLogin(): boolean {
    return this._isLogin;
  }

  ngOnDestroy() {
    this.logedSubscription.unsubscribe();
  }
}
