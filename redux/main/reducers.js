import * as actions from './actionTypes'

const initialState = {
  data : [],
  pageActions : {
    modal : false,
    isPhone : true
  }
}

export const mainReducer = (state = initialState, {type, payload}) => {
  switch (type) { 
    case actions.SET_DATA :
      return {...state, data : payload.records}
    case actions.SET_PAGE_ACTIONS :
      return {...state, pageActions : payload.records}
    case actions.SET_DATA :
      return {...state, data : payload.records}
    default : 
      return state
  }
}