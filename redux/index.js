import { createStore, combineReducers} from "redux"
import { mainReducer } from "./main/reducers"

var MainStore
const reducers = combineReducers({
  main : mainReducer
})

MainStore  = createStore(reducers)

export default MainStore