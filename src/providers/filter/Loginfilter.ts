import {UserServiceProvider} from "../service/user.service";

export abstract  class Loginfilter{
  constructor(protected userService:UserServiceProvider){

  }

  ionViewCanEnter():boolean{
    return this.userService.isLogin()
  }
}
