import {Action} from "@ngrx/store";

export const TOPIC_SEARCH_ONE = "subsection search one";
export const TOPIC_SEARCH_LIST = "subsection search list";
export const TOPIC_ADD_LIST = "subsection add list";

export interface SectionInfo{
  sectionIcon:string
  sectionId :string
  sectionTitle:string
  subSectionIcon:string
  subSectionId:string
  subSectionIsCreateTopic:string
  subSectionIsDefault:string
  subSectionIsReply:string
  subSectionTitle:string
}

export interface TopicInfo{
  desc:string
  isCollected:string
  isLastPage:string
  lastFloor:string
  mainReplyInfos: {[index:string]:string}[]
  reset:string
  sectionId:string
  status:string
  subSectionId:string
  topicTitle:string
}

export class TopicState{
         sectionInfo: SectionInfo ;
         topicInfo:TopicInfo ;
}

export class myTopicAction implements Action{
  constructor(public type:string,public payload:TopicState){}
}



export function TopicReducer(state:TopicState={sectionInfo:null,topicInfo:null},action:myTopicAction){
  switch (action.type){
    case TOPIC_SEARCH_ONE:
      state.sectionInfo = action.payload&&action.payload.sectionInfo;
      return Object.assign({},state);
    case TOPIC_SEARCH_LIST:
      state.topicInfo = action.payload&&action.payload.topicInfo;
      return Object.assign({},state);
    case TOPIC_ADD_LIST:
        action.payload.topicInfo.mainReplyInfos = [...state.topicInfo.mainReplyInfos,...action.payload.topicInfo.mainReplyInfos];
        state.topicInfo = action.payload&&action.payload.topicInfo;
        return Object.assign({},state);
    default:
      return state;
  }
}
