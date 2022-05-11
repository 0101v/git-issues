import { 
  ADD_ISSUES_ELEM_ACTION
} from "../constants";

const INITIAL_STATE = {
    number: 1
  }

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    
    case ADD_ISSUES_ELEM_ACTION:
      return {...payload}
    
    default:
      return state
  }
}

export default reducer