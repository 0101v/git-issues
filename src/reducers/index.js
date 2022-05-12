import { 
  ADD_ISSUES_ELEM_ACTION
} from "../constants";

const INITIAL_STATE = {
    id: 0
  }

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    
    case ADD_ISSUES_ELEM_ACTION:
      return payload
    
    default:
      return state
  }
}

export default reducer