import {Action} from "@ngrx/store";

export const INDEX_SEARCH = "index search";

export interface IndexState{
    icon:string;
    title:string;
    id:string
}

export class myAction implements Action{
  readonly type = INDEX_SEARCH

  constructor(public payload:IndexState[]){}
}

export function BbsReducer(state:IndexState[],action:myAction){
  switch (action.type){
    case INDEX_SEARCH:
      state = action.payload
      return state;
    default:
      return state;
  }
}
