import {Action} from "@ngrx/store";

export const SECTION_SEARCH = "section search";

export interface SectionState{
  detailInfo:{[index:string]:string};
  subSections:{[index:string]:string}[];
}

export class mySectionAction implements Action{
  readonly type = SECTION_SEARCH

  constructor(public payload:SectionState){}
}

export function SectionReducer(state:SectionState,action:mySectionAction){
  switch (action.type){
    case SECTION_SEARCH:
      state = action.payload
      return state;
    default:
      return state;
  }
}
