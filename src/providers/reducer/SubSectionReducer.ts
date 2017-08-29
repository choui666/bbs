import {Action} from "@ngrx/store";

export const SUBSECTION_SEARCH = "subsection search";

export class SubSectionState{
  bbsrandom :string = "";
  desc :string = "";
  isLastPage :string= "";
  lastIds :string= "";
  lastTime :string= "";
  reset :string= "";
  status :string= "";
  topics:{[index:string]:string}[]= [];
}

export class mySubSectionAction implements Action{
  readonly type = SUBSECTION_SEARCH

  constructor(public payload:SubSectionState){}
}



export function SubSectionReducer(state:SubSectionState,action:mySubSectionAction){
  switch (action.type){
    case SUBSECTION_SEARCH:
      state = action.payload
      return state;
    default:
      return state;
  }
}
