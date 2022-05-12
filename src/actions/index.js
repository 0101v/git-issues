import { 
  ADD_ISSUES_ELEM_ACTION
} from "../constants";

export const addIssuesElem = payload => {
  return ({
    type: ADD_ISSUES_ELEM_ACTION,
    payload,
  })
}