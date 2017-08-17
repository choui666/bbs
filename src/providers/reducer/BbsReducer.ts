import {Action} from "@ngrx/store";

export const INDEX_SEARCH = "index search";

export interface IndexState{
    icon:string;
    title:string;
    id:string
}

export function BbsReeducer(state:IndexState[],action:Action){
  switch (action.type){
    case INDEX_SEARCH:
      //state = action.payload
      return state;
    default:
      return state;
  }
}
