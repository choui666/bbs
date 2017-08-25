import {BbsReducer, IndexState} from "./BbsReducer";
import {UserInfoReducer, UserInfoState} from "./UserInfoReducer";

export const MyReducers = {
  index:BbsReducer,
  userInfo:UserInfoReducer
}

export interface AppState {
  index: IndexState[];
  userInfo:UserInfoState

}
