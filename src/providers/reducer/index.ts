import {BbsReducer, IndexState} from "./BbsReducer";
import {UserInfoReducer, UserInfoState} from "./UserInfoReducer";
import {SectionReducer,SectionState} from "./SectionReducer"

export const MyReducers = {
  index:BbsReducer,
  userInfo:UserInfoReducer,
  section:SectionReducer
}

export interface AppState {
  index: IndexState[];
  userInfo:UserInfoState,
  section:SectionState

}
