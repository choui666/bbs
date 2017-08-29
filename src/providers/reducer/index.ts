import {BbsReducer, IndexState} from "./BbsReducer";
import {UserInfoReducer, UserInfoState} from "./UserInfoReducer";
import {SectionReducer,SectionState} from "./SectionReducer"
import {SubSectionReducer, SubSectionState} from "./SubSectionReducer";

export const MyReducers = {
  index:BbsReducer,
  userInfo:UserInfoReducer,
  section:SectionReducer,
  subsection:SubSectionReducer
}

export interface AppState {
  index: IndexState[];
  userInfo:UserInfoState,
  section:SectionState,
  subsection:SubSectionState

}
