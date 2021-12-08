import * as actions from './actionTypes'
import MainStore from '../index'

export const setData = (records) =>{
  MainStore.dispatch({
    type : actions.SET_DATA ,
    payload: {
      records
    }
  })
} 
export const setPageActions = (records) =>{
  MainStore.dispatch({
    type : actions.SET_PAGE_ACTIONS ,
    payload: {
      records
    }
  })
} 
