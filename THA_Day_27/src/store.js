import {createStore} from 'redux'
import {rootReducer} from './Actions/Reducer/index'
const store = createStore(rootReducer)
export default store;