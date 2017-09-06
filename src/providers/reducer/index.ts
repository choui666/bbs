import {BbsReducer, IndexState} from "./BbsReducer";
import {UserInfoReducer, UserInfoState} from "./UserInfoReducer";
import {SectionReducer,SectionState} from "./SectionReducer"
import {SubSectionReducer, SubSectionState} from "./SubSectionReducer";
import {TopicReducer, TopicState} from "./TopicReducer";

export const MyReducers = {
  index:BbsReducer,
  userInfo:UserInfoReducer,
  section:SectionReducer,
  subsection:SubSectionReducer,
  topic:TopicReducer
}

export interface AppState {
  index: IndexState[];
  userInfo:UserInfoState,
  section:SectionState,
  subsection:SubSectionState,
  topic:TopicState

}
