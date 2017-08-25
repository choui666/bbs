import {Action} from "@ngrx/store";
import {IndexState} from "./BbsReducer";

export const USER_SEARCH = "user search";

export interface UserInfo{
  activity:string;
  createdReplyNum:string
  createdTopicNum:string
  icon:string
  id:string
  mail:string
  name:string
  nickname:string
  registerDate:string
}

export interface UserInfoState{
  bbsrandom:string;
  reset:string;
  userinfo:UserInfo
}

export class myUserInfoAction implements Action{
  readonly type = USER_SEARCH
  constructor(public payload:UserInfoState){}
}

export function UserInfoReducer(state:UserInfoState,action:myUserInfoAction){
  switch (action.type){
    case USER_SEARCH:
      state = action.payload
      return state;
    default:
      return state;
  }
}




